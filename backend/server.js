const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:3002'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use(express.json()); // 用於解析 JSON 請求

// 連接 MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// 路由
const userRoutes = require('./routes/users');
const memoryCardRoutes = require('./routes/memoryCards');
const borrow = require('./routes/borrow');

app.use('/api/users', userRoutes);
app.use('/api/memorycards', memoryCardRoutes);
app.use('/api/borrow', borrow);

// 啟動伺服器
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
