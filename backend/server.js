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
        process.env.ALLOWED_ORIGIN,
        "https://memory-card-borrowing-frontend.onrender.com", // 直接添加預期的前端URL
        // 在本地開發時使用的來源
        "http://localhost:3000",
        "http://localhost:3002"
      ].filter(Boolean);

      if (!origin || allowedOrigins.some((allowed) => origin.indexOf(allowed) !== -1)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    //   // 如果沒有 origin（例如來自某些內部請求或測試），則允許該請求
    //   if (!origin) {
    //     return callback(null, true);
    //   }

    //   // 動態允許任何域名（例如，允許來自任意的 IP 或子域名的請求）
    //   const allowedOrigins = [
    //     "http://localhost:3000",
    //     "http://localhost:3002",
    //     process.env.FRONTEND_URL,
    //     process.env.ALLOWED_ORIGIN
    //   ].filter(Boolean); // 過濾掉 undefined 或 null

    //   // 檢查請求的 origin 是否在允許的範圍內，這裡可以根據需要調整為更靈活的匹配方式
    //   if (
    //     allowedOrigins.includes(origin) ||
    //     origin.endsWith(".loca.lt") ||
    //     /^http:\/\/\d+\.\d+\.\d+\.\d+/.test(origin)
    //   ) {
    //     callback(null, true); // 允許該來源
    //   } else {
    //     callback(new Error("Not allowed by CORS")); // 禁止該來源
    //   }
    // },
    credentials: true, // 允許跨域請求攜帶憑證（例如 Cookies）
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-auth-token", // 添加這個
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Headers",
      "Access-Control-Request-Private-Network"
    ],
    exposedHeaders: ["x-auth-token"] // 添加這個
  })
);

app.use(express.json()); // 用來解析 JSON 請求

// 為所有路由添加錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "服務器內部錯誤" });
});

// 連接 MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 路由
const users = require("./routes/users");
const memoryCardRoutes = require("./routes/memoryCards");
const borrow = require("./routes/borrow");
const userRoute = require("./routes/userRoute");

app.use("/api/users", users);
app.use("/api/memorycards", memoryCardRoutes);
app.use("/api/borrow", borrow);
app.use("/api/userRoute", userRoute);
app.use("/api/logs", require("./routes/logRoutes")); // 新增日誌路由

// 啟動伺服器
const PORT = process.env.PORT || 3002;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
