// middleware/logMiddleware.js
const logService = require("../services/logService.js");

const getClientIp = (req) => {
  return (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
};

const logMiddleware = {
  logAction: (action, target) => {
    return async (req, res, next) => {
      const originalEnd = res.end;

      res.end = async function (chunk, encoding) {
        res.end = originalEnd;
        res.end(chunk, encoding);

        // 只在操作成功時記錄
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const user = req.user;
          if (user) {
            try {
              // 從請求中提取目標ID，例如從URL參數
              const targetId = req.params.id || null;

              // 從請求體中獲取詳細信息
              const details = {
                method: req.method,
                path: req.path,
                body: req.body
              };

              await logService.createLog(
                user._id,
                user.username,
                action,
                target,
                targetId,
                details,
                getClientIp(req)
              );
            } catch (error) {
              console.error("記錄操作日誌時出錯:", error);
            }
          }
        }
      };

      next();
    };
  }
};

module.exports = logMiddleware;
