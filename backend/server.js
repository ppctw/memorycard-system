const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // 如果沒有 origin（例如來自某些內部請求或測試），則允許該請求
      if (!origin) {
        return callback(null, true);
      }

      // 動態允許任何域名（例如，允許來自任意的 IP 或子域名的請求）
      const allowedOrigins = [
        "http://localhost:3000", // 本地端的前端
        "http://localhost:3002", // 本地端的後端
        process.env.ALLOWED_ORIGIN // 從環境變數中讀取的其他允許的來源
      ];

      // 檢查請求的 origin 是否在允許的範圍內，這裡可以根據需要調整為更靈活的匹配方式
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".loca.lt") ||
        /^http:\/\/\d+\.\d+\.\d+\.\d+/.test(origin)
      ) {
        callback(null, true); // 允許該來源
      } else {
        callback(new Error("Not allowed by CORS")); // 禁止該來源
      }
    },
    credentials: true, // 允許跨域請求攜帶憑證（例如 Cookies）
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Request-Private-Network"
    ]
  })
);

app.use(express.json()); // 用來解析 JSON 請求

// 連接 MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 路由
const userRoutes = require("./routes/users");
const memoryCardRoutes = require("./routes/memoryCards");
const borrow = require("./routes/borrow");

app.use("/api/users", userRoutes);
app.use("/api/memorycards", memoryCardRoutes);
app.use("/api/borrow", borrow);

// 啟動伺服器
const PORT = process.env.PORT || 3002;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
