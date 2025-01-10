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
      const allowedOrigins = [
        "http://localhost:3000", // 本地端的前端
        "http://localhost:3002", // 本地端的後端
        "http://34.81.197.33:3000", // 允許這個來源
        "http://34.81.197.33:3002", // 允許這個來源
        process.env.ALLOWED_ORIGIN // 從環境變數中讀取的其他允許的來源
      ];

      // 動態允許 LocalTunnel 域名（.loca.lt）
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".loca.lt")) {
        callback(null, true); // 允許該來源
      } else {
        callback(new Error("Not allowed by CORS")); // 禁止該來源
      }
    },
    credentials: true // 如果需要傳送 cookie 或認證信息，這個設置為 true
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
