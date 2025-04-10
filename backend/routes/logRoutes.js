const express = require("express");
const router = express.Router();
const Log = require("../models/Log");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// 獲取所有日誌 (分頁功能)
router.get("/", [auth, admin], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    // 獲取總記錄數
    const total = await Log.countDocuments();

    // 獲取分頁的日誌記錄
    const logs = await Log.find().sort({ timestamp: -1 }).skip(skip).limit(limit);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error("獲取日誌時出錯:", error);
    res.status(500).json({ msg: "獲取日誌失敗" });
  }
});

// 按操作類型獲取日誌
router.get("/action/:actionType", [auth, admin], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const actionType = req.params.actionType;

    // 獲取指定操作類型的總記錄數
    const total = await Log.countDocuments({ action: actionType });

    // 獲取分頁的日誌記錄
    const logs = await Log.find({ action: actionType })
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      actionType
    });
  } catch (error) {
    console.error("獲取日誌時出錯:", error);
    res.status(500).json({ msg: "獲取日誌失敗" });
  }
});

// 按目標類型獲取日誌
router.get("/target/:targetType", [auth, admin], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const targetType = req.params.targetType;

    // 獲取指定目標類型的總記錄數
    const total = await Log.countDocuments({ target: targetType });

    // 獲取分頁的日誌記錄
    const logs = await Log.find({ target: targetType })
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      targetType
    });
  } catch (error) {
    console.error("獲取日誌時出錯:", error);
    res.status(500).json({ msg: "獲取日誌失敗" });
  }
});

// 按用戶名稱獲取日誌
router.get("/username/:username", [auth, admin], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const username = req.params.username;

    // 獲取指定用戶的總記錄數
    const total = await Log.countDocuments({ username });

    // 獲取分頁的日誌記錄
    const logs = await Log.find({ username }).sort({ timestamp: -1 }).skip(skip).limit(limit);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      username
    });
  } catch (error) {
    console.error("獲取日誌時出錯:", error);
    res.status(500).json({ msg: "獲取日誌失敗" });
  }
});

// 獲取所有不同的用戶名
router.get("/usernames", [auth, admin], async (req, res) => {
  try {
    const usernames = await Log.distinct("username");
    res.json(usernames);
  } catch (error) {
    console.error("獲取用戶名時出錯:", error);
    res.status(500).json({ msg: "獲取用戶名失敗" });
  }
});

// 獲取所有不同的操作類型
router.get("/action-types", [auth, admin], async (req, res) => {
  try {
    const actionTypes = await Log.distinct("action");
    res.json(actionTypes);
  } catch (error) {
    console.error("獲取操作類型時出錯:", error);
    res.status(500).json({ msg: "獲取操作類型失敗" });
  }
});

// 獲取所有不同的目標類型
router.get("/target-types", [auth, admin], async (req, res) => {
  try {
    const targetTypes = await Log.distinct("target");
    res.json(targetTypes);
  } catch (error) {
    console.error("獲取目標類型時出錯:", error);
    res.status(500).json({ msg: "獲取目標類型失敗" });
  }
});

// 按照日期範圍獲取日誌
router.get("/date-range", [auth, admin], async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const query = {};

    if (startDate && endDate) {
      query.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else if (startDate) {
      query.timestamp = { $gte: new Date(startDate) };
    } else if (endDate) {
      query.timestamp = { $lte: new Date(endDate) };
    }

    // 獲取指定日期範圍的總記錄數
    const total = await Log.countDocuments(query);

    // 獲取分頁的日誌記錄
    const logs = await Log.find(query).sort({ timestamp: -1 }).skip(skip).limit(limit);

    res.json({
      logs,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      dateRange: { startDate, endDate }
    });
  } catch (error) {
    console.error("獲取日誌時出錯:", error);
    res.status(500).json({ msg: "獲取日誌失敗" });
  }
});

module.exports = router;
// // routes/logRoutes.js
// const express = require("express");
// const router = express.Router();
// const Log = require("../models/Log");
// const auth = require("../middleware/auth");
// const admin = require("../middleware/admin");

// // 獲取所有日誌 (僅管理員可訪問)
// router.get("/", [auth, admin], async (req, res) => {
//   try {
//     const logs = await Log.find()
//       .sort({ timestamp: -1 })
//       .limit(parseInt(req.query.limit) || 100);

//     res.json(logs);
//   } catch (error) {
//     console.error("獲取日誌時出錯:", error);
//     res.status(500).json({ msg: "獲取日誌失敗" });
//   }
// });

// // 按用戶ID獲取日誌
// router.get("/user/:userId", [auth, admin], async (req, res) => {
//   try {
//     const logs = await Log.find({ user: req.params.userId })
//       .sort({ timestamp: -1 })
//       .limit(parseInt(req.query.limit) || 100);

//     res.json(logs);
//   } catch (error) {
//     console.error("獲取用戶日誌時出錯:", error);
//     res.status(500).json({ msg: "獲取用戶日誌失敗" });
//   }
// });

// // 按目標類型獲取日誌
// router.get("/target/:targetType", [auth, admin], async (req, res) => {
//   try {
//     const logs = await Log.find({ target: req.params.targetType })
//       .sort({ timestamp: -1 })
//       .limit(parseInt(req.query.limit) || 100);

//     res.json(logs);
//   } catch (error) {
//     console.error("獲取目標日誌時出錯:", error);
//     res.status(500).json({ msg: "獲取目標日誌失敗" });
//   }
// });

// module.exports = router;
