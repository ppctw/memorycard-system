// backend/routes/users.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { logAction } = require("../middleware/logMiddleware"); // 引入日誌中間件

// 註冊
router.post("/register", async (req, res) => {
  const { username, nickname, password, role } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "用戶已存在" });
    }
    user = new User({ username, nickname, password, role });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // 手動記錄註冊操作
    const logService = require("../services/logService.js");
    await logService.createLog(
      user._id, // 新創建的用戶ID
      username, // 用戶名
      "register", // 操作類型
      "user", // 目標實體
      user._id, // 目標ID
      { role: role }, // 詳細信息（不包含密碼）
      req.ip // IP地址
    );

    res.json({ msg: "註冊成功" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("伺服器錯誤");
  }
});

// 登入
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "無效的帳號或密碼" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // 在登錄失敗的情況下
    if (!user || !isMatch) {
      // 記錄失敗的登錄嘗試
      const logService = require("../services/logService.js");
      await logService.createLog(
        null, // 用戶ID（此時未知）
        username, // 嘗試的用戶名
        "login-failed", // 操作類型
        "user", // 目標實體
        null, // 目標ID
        {}, // 詳細信息
        req.ip // IP地址
      );

      return res.status(400).json({ msg: "無效的帳號或密碼" });
    }
    const payload = {
      user: {
        id: user.id,
        role: user.role,
        nickname: user.nickname // 加入用戶名稱
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, async (err, token) => {
      if (err) throw err;

      // 成功登錄後記錄日誌
      const logService = require("../services/logService.js");
      await logService.createLog(
        user._id, // 用戶ID
        username, // 用戶名
        "login", // 操作類型
        "user", // 目標實體
        user._id, // 目標ID
        {}, // 詳細信息（不包含敏感數據）
        req.ip // IP地址
      );

      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("伺服器錯誤");
  }
});
module.exports = router;
