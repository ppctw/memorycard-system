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
        "http://localhost:3000",
        "http://localhost:3002",
        process.env.ALLOWED_ORIGIN // You can specify other origins in the environment variables for production
      ];

      // Allow LocalTunnel dynamic domains (loca.lt) as well
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".loca.lt")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

app.use(express.json()); // Use for parsing JSON requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
const userRoutes = require("./routes/users");
const memoryCardRoutes = require("./routes/memoryCards");
const borrow = require("./routes/borrow");

app.use("/api/users", userRoutes);
app.use("/api/memorycards", memoryCardRoutes);
app.use("/api/borrow", borrow);

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
