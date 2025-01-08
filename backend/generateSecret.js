// generateSecret.js
const crypto = require('crypto');

function generateJWTSecret() {
    return crypto.randomBytes(64).toString('hex'); // 生成 128 位的十六進制字符串
}

const secret = generateJWTSecret();
console.log('您的 JWT_SECRET 是:', secret);
