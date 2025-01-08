module.exports = function(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: '沒有管理員權限' });
    }
    next();
};
