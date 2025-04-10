// routes/memorycards.js
const express = require("express");
const router = express.Router();
const MemoryCard = require("../models/MemoryCard");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// 新增 MemoryCard
router.post("/", auth, admin, async (req, res) => {
  const { cardType, serialNumber, remarks, borrowStatus = true } = req.body; // 確保借用狀態有被處理

  try {
    // 檢查編號是否已存在
    if (serialNumber && serialNumber.trim() !== "") {
      const existingCard = await MemoryCard.findOne({ serialNumber });
      if (existingCard) {
        return res.status(400).json({ msg: "此記憶卡編號已存在，請使用不同的編號" });
      }
    }

    const newCard = new MemoryCard({
      cardType,
      serialNumber,
      remarks,
      borrowStatus // 確保借用狀態會儲存
    });

    const card = await newCard.save();
    res.json(card); // 返回儲存後的資料
  } catch (err) {
    console.error("Error in POST /memorycards:", err.message);
    res.status(500).send("伺服器錯誤");
  }
});

// 獲取所有 MemoryCards
router.get("/", async (req, res) => {
  try {
    const cards = await MemoryCard.find();
    res.json(cards);
  } catch (err) {
    console.error("Error in GET /memorycards:", err.message);
    res.status(500).send("伺服器錯誤");
  }
});

// 獲取單個 MemoryCard
router.get("/:id", auth, async (req, res) => {
  try {
    const card = await MemoryCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }
    res.json(card);
  } catch (err) {
    console.error("Error in GET /memorycards/:id:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }
    res.status(500).send("伺服器錯誤");
  }
});

// 更新 MemoryCard
router.put("/:id", auth, admin, async (req, res) => {
  const { cardType, serialNumber, remarks, borrowStatus = true } = req.body;
  const cardFields = {};

  if (cardType) cardFields.cardType = cardType;
  if (serialNumber) {
    // 檢查是否有其他記憶卡使用相同編號
    const existingCard = await MemoryCard.findOne({
      serialNumber,
      _id: { $ne: req.params.id } // 排除當前正在更新的記憶卡
    });

    if (existingCard) {
      return res.status(400).json({ msg: "此記憶卡編號已被其他記憶卡使用，請使用不同的編號" });
    }

    cardFields.serialNumber = serialNumber;
  }
  if (remarks) cardFields.remarks = remarks;
  cardFields.borrowStatus = borrowStatus;

  try {
    let card = await MemoryCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }

    card = await MemoryCard.findByIdAndUpdate(req.params.id, { $set: cardFields }, { new: true });

    res.json(card);
  } catch (err) {
    console.error("Error in PUT /memorycards/:id:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }
    res.status(500).send("伺服器錯誤");
  }
});

// 刪除 MemoryCard
router.delete("/:id", auth, admin, async (req, res) => {
  try {
    const card = await MemoryCard.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }

    res.json({ msg: "記憶卡已刪除" });
  } catch (err) {
    console.error("Error in DELETE /memorycards/:id:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "記憶卡未找到" });
    }
    res.status(500).send("伺服器錯誤");
  }
});

module.exports = router;
