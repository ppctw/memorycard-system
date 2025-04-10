const express = require("express");
const router = express.Router();
const Borrow = require("../models/BorrowRecord");
const MemoryCard = require("../models/MemoryCard");
const logService = require("../services/logService");
// GET /api/borrow - 獲取所有借用記錄並按借用日期排序
router.get("/", async (req, res) => {
  try {
    const borrowRecords = await Borrow.find().sort({ borrowDate: -1 }); // 根據 borrowDate 排序，-1 表示倒序（最新的在前）
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
    // 檢查該記憶卡是否已被借用且未歸還
    const existingBorrow = await Borrow.findOne({ cardId, returnDate: { $exists: false } });

    if (existingBorrow) {
      return res.status(400).json({ message: "該記憶卡尚未歸還，無法再次借用" });
    }

    const newBorrow = new Borrow({
      cardId,
      borrowerName,
      borrowDate,
      notes
    });

    await newBorrow.save();

    // 更新記憶卡狀態為已借出（borrowStatus: false）
    await MemoryCard.findOneAndUpdate(
      { serialNumber: cardId },
      { $set: { borrowStatus: false } },
      { new: true }
    );

    res.status(201).json(newBorrow);
  } catch (error) {
    console.error("保存借用記錄時出錯：", error);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

// 更新借用記錄並設置歸還時間
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { cardId, borrowerName, borrowDate, notes, returnDate } = req.body;

  try {
    // 獲取更新前的記錄
    const oldBorrow = await Borrow.findById(id);
    if (!oldBorrow) {
      return res.status(404).json({ message: "記錄未找到" });
    }

    // 保存原始數據用於日誌
    const oldData = {
      cardId: oldBorrow.cardId,
      borrowerName: oldBorrow.borrowerName,
      borrowDate: oldBorrow.borrowDate,
      notes: oldBorrow.notes,
      returnDate: oldBorrow.returnDate
    };

    const updatedBorrow = await Borrow.findByIdAndUpdate(
      id,
      { cardId, borrowerName, borrowDate, notes, returnDate },
      { new: true }
    );

    // 檢查是否是新歸還操作
    const isNewReturn = returnDate && !oldBorrow.returnDate;
    let memoryCardUpdated = false;

    // 如果有歸還時間，將記憶卡狀態更新為未借出（borrowStatus: true）
    if (isNewReturn) {
      const updatedCard = await MemoryCard.findOneAndUpdate(
        { serialNumber: updatedBorrow.cardId },
        { $set: { borrowStatus: true } },
        { new: true }
      );
      memoryCardUpdated = true;
    }

    // 記錄更新借用記錄的操作
    try {
      const actionType = isNewReturn ? "return" : "update";
      await logService.createLog(
        req.user ? req.user.id : null,
        borrowerName, // 使用借用者名稱
        actionType,
        "更新借用資料",
        id,
        {
          old: oldData,
          new: {
            cardId: updatedBorrow.cardId,
            borrowerName: updatedBorrow.borrowerName,
            borrowDate: updatedBorrow.borrowDate,
            notes: updatedBorrow.notes,
            returnDate: updatedBorrow.returnDate
          },
          memoryCardUpdated: memoryCardUpdated,
          cardStatus: memoryCardUpdated ? "已更新為未借出" : "無需更新"
        },
        req.ip
      );
    } catch (logError) {
      console.error("記錄更新借用記錄日誌失敗:", logError);
    }

    res.status(200).json(updatedBorrow);
  } catch (error) {
    console.error("更新記錄時出錯：", error);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

// 刪除 (記錄時也要考慮更新記憶卡狀態)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBorrow = await Borrow.findById(id);

    if (!deletedBorrow) {
      return res.status(404).json({ message: "記錄未找到" });
    }

    // 保存完整的借用信息用於日誌
    const borrowDetails = {
      cardId: deletedBorrow.cardId,
      borrowerName: deletedBorrow.borrowerName,
      borrowDate: deletedBorrow.borrowDate,
      returnDate: deletedBorrow.returnDate,
      notes: deletedBorrow.notes
    };

    // 如果刪除的是未歸還的記錄，需要將記憶卡狀態更新為未借出
    let memoryCardUpdated = false;
    if (!deletedBorrow.returnDate) {
      const updatedCard = await MemoryCard.findOneAndUpdate(
        { serialNumber: deletedBorrow.cardId },
        { $set: { borrowStatus: true } },
        { new: true }
      );
      memoryCardUpdated = true;
    }

    await Borrow.findByIdAndDelete(id);

    // 記錄刪除借用記錄的操作
    try {
      await logService.createLog(
        req.user ? req.user.id : null,
        deletedBorrow.borrowerName, // 使用借用者名稱而不是當前用戶
        "delete",
        "刪除借用紀錄",
        id,
        {
          ...borrowDetails,
          memoryCardUpdated: memoryCardUpdated,
          cardStatus: memoryCardUpdated ? "已更新為未借出" : "無需更新"
        },
        req.ip
      );
    } catch (logError) {
      console.error("記錄刪除借用記錄日誌失敗:", logError);
    }

    res.status(200).json({ message: "刪除成功" });
  } catch (error) {
    console.error("刪除記錄時出錯：", error);
    res.status(500).json({ message: "伺服器錯誤" });
  }
});

module.exports = router;
