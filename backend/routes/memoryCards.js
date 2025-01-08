const express = require("express");
const router = express.Router();
const MemoryCard = require("../models/MemoryCard");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// 新增 MemoryCard
router.post("/", auth, admin, async (req, res) => {
  const { cardType, serialNumber, remarks } = req.body;

  try {
    const newCard = new MemoryCard({
      cardType, // 記憶卡類型
      serialNumber, // 編號
      remarks, // 備註
    });

    const card = await newCard.save();
    res.json(card);
  } catch (err) {
    console.error("Error in POST /memorycards:", err.message);
    res.status(500).send("伺服器錯誤");
  }
});

// 獲取所有 MemoryCards
router.get("/", async (req, res) => {
  try {
    const cards = await MemoryCard.find(); // 這會返回所有記憶卡
    res.json(cards); // 返回陣列
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
  const { cardType, serialNumber, remarks, borrowStatus = true } = req.body; // 設定預設值為 true
  const cardFields = {};

  if (cardType) cardFields.cardType = cardType;
  if (serialNumber) cardFields.serialNumber = serialNumber;
  if (remarks) cardFields.remarks = remarks;
  cardFields.borrowStatus = borrowStatus; // 總是更新 borrowStatus

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
