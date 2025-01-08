const mongoose = require("mongoose");

const MemoryCardSchema = new mongoose.Schema({
  cardType: {
    type: String,
    required: true, // 記憶卡類型 (64G, 128G, 256G)
  },
  serialNumber: {
    type: String,
    required: false, // 編號
  },
  remarks: {
    type: String,
    required: false, // 備註
  },
  borrowStatus: {
    type: Boolean,
    required: true, // 借用狀態 (true 或 false)
    default: false, // 預設為未借出
  },
});

module.exports = mongoose.model("MemoryCard", MemoryCardSchema);
