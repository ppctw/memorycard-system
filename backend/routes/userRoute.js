const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth"); // 假設有認證中間件
const logService = require("../services/logService"); // 引入日誌服務

// 獲取所有用戶
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "伺服器錯誤" });
  }
});

// 獲取單個用戶
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "找不到用戶" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "找不到用戶" });
    }
    res.status(500).json({ msg: "伺服器錯誤" });
  }
});

// 新增用戶
router.post("/", async (req, res) => {
  const { username, nickname, role } = req.body;

  try {
    // 檢查用戶是否已存在
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "用戶已存在" });
    }

    // 創建新用戶，密碼設為與用戶名相同
    user = new User({
      username,
      nickname,
      password: username, // 密碼預設為用戶名
      role: role || "user"
    });

    // 加密密碼
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    // 記錄創建用戶的操作
    try {
      await logService.createLog(
        req.user ? req.user.id : null, // 如果有認證用戶則記錄，否則為null
        req.user ? req.user.username : "system", // 操作者的用戶名
        "create",
        "user",
        user._id,
        { username, nickname, role: role || "user" }, // 不記錄密碼
        req.ip
      );
    } catch (logError) {
      console.error("記錄創建用戶日誌失敗:", logError);
    }

    // 返回用戶資訊（不包含密碼）
    const userData = await User.findById(user._id).select("-password");
    res.json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "伺服器錯誤" });
  }
});

// 更新用戶
router.put("/:id", async (req, res) => {
  try {
    const { username, nickname, role } = req.body;

    // 查找用戶
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "找不到用戶" });
    }

    // 檢查用戶名是否被其他用戶使用
    if (username && username !== user.username) {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ msg: "用戶名已被使用" });
      }
    }

    // 儲存修改前的數據用於日誌
    const oldData = {
      username: user.username,
      nickname: user.nickname,
      role: user.role
    };

    // 更新用戶資料
    if (username) user.username = username;
    if (nickname) user.nickname = nickname;
    if (role) user.role = role;

    await user.save();

    // 記錄更新用戶的操作
    try {
      await logService.createLog(
        req.user ? req.user.id : null,
        req.user ? req.user.username : "system",
        "update",
        "user",
        user._id,
        {
          old: oldData,
          new: { username: user.username, nickname: user.nickname, role: user.role }
        },
        req.ip
      );
    } catch (logError) {
      console.error("記錄更新用戶日誌失敗:", logError);
    }

    // 返回更新後的用戶資料（不包含密碼）
    const updatedUser = await User.findById(user._id).select("-password");
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "找不到用戶" });
    }
    res.status(500).json({ msg: "伺服器錯誤" });
  }
});

// 重置用戶密碼為用戶名
router.put("/:id/reset-password", async (req, res) => {
  try {
    // 查找用戶
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "找不到用戶" });
    }

    // 將密碼重置為用戶名
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.username, salt);

    await user.save();

    // 記錄重置密碼的操作
    try {
      await logService.createLog(
        req.user ? req.user.id : null,
        req.user ? req.user.username : "system",
        "reset-password",
        "user",
        user._id,
        { username: user.username },
        req.ip
      );
    } catch (logError) {
      console.error("記錄重置密碼日誌失敗:", logError);
    }

    res.json({ msg: "密碼已重置為用戶名" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "找不到用戶" });
    }
    res.status(500).json({ msg: "伺服器錯誤" });
  }
});

// 刪除用戶
router.delete("/:id", auth, async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(`嘗試刪除用戶 ID: ${userId}`);

    // 檢查是否嘗試刪除自己的帳號
    if (req.user.id === userId) {
      console.log(`用戶 ${req.user.id} 嘗試刪除自己的帳號`);
      return res.status(403).json({ msg: "無法刪除當前登入的帳號" });
    }

    // 首先檢查用戶是否存在
    const user = await User.findById(userId);
    if (!user) {
      console.log(`用戶不存在: ${userId}`);
      return res.status(404).json({ msg: "找不到用戶" });
    }

    // 保存用戶資訊用於日誌
    const userData = {
      username: user.username,
      nickname: user.nickname,
      role: user.role
    };

    // 使用 findByIdAndDelete 刪除用戶
    const result = await User.findByIdAndDelete(userId);
    console.log(`刪除結果:`, result);

    // 記錄刪除用戶的操作
    try {
      await logService.createLog(
        req.user.id,
        req.user.username,
        "delete",
        "user",
        userId,
        userData,
        req.ip
      );
    } catch (logError) {
      console.error("記錄刪除用戶日誌失敗:", logError);
    }

    res.json({ msg: "用戶已成功刪除" });
  } catch (err) {
    console.error(`刪除用戶時出錯:`, err);

    // 處理 ObjectId 格式錯誤
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "找不到用戶, ID 格式無效" });
    }

    res.status(500).json({ msg: "伺服器錯誤", error: err.message });
  }
});

module.exports = router;
