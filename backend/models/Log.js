// models/Log.js
const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    // 移除 required: true，使之成為可選字段
  },
  username: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: true
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId
    // 這也應該是可選的
  },
  details: {
    type: Object,
    default: {}
  },
  ip: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Log", LogSchema);
