// middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // 從 header 中獲取 token
  const token = req.header("x-auth-token");

  // 如果沒有 token，返回 401
  if (!token) {
    return res.status(401).json({ msg: "沒有 token，授權失敗，請重新登入" });
  }

  // 驗證 token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token 無效，請重新登入" });
  }
};
