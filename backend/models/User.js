// backend/models/User.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  nickname: { type: String, required: true }, // 新增暱稱欄位
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "manager", "user"], default: "user" }
});

module.exports = mongoose.model("User", UserSchema);
