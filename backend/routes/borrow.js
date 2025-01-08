const express = require('express');
const router = express.Router();
const Borrow = require('../models/BorrowRecord'); 

// GET /api/borrow - 獲取所有借用記錄
router.get('/', async (req, res) => {
    try {
        const borrowRecords = await Borrow.find(); // 從 MongoDB 中獲取所有記錄
        res.json(borrowRecords);
    } catch (error) {
        console.error("獲取借用記錄時出錯：", error);
        res.status(500).json({ message: "伺服器錯誤" });
    }
});

// POST /api/borrow - 新增借用記錄
router.post("/", async (req, res) => {
    const { cardId, borrowerName, borrowDate, notes } = req.body;

    if (!cardId || !borrowerName || !borrowDate) {
        return res.status(400).json({ message: "請提供完整的借用資料" });
    }

    try {
        const newBorrow = new Borrow({
            cardId,
            borrowerName,
            borrowDate,
            notes,
        });

        await newBorrow.save(); // 將新記錄存入 MongoDB
        res.status(201).json(newBorrow); // 回傳新增的記錄
    } catch (error) {
        console.error("保存借用記錄時出錯：", error);
        res.status(500).json({ message: "伺服器錯誤" });
    }
});

// 刪除記錄
router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBorrow = await Borrow.findByIdAndDelete(id);
  
      if (!deletedBorrow) {
        return res.status(404).json({ message: "記錄未找到" });
      }
  
      res.status(200).json({ message: "刪除成功" });
    } catch (error) {
      console.error("刪除記錄時出錯：", error);
      res.status(500).json({ message: "伺服器錯誤" });
    }
  });
  
module.exports = router;
