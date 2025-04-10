// services/logService.js
const Log = require("../models/Log");

const logService = {
  createLog: async (userId, username, action, target, targetId, details, ip) => {
    try {
      // 創建日誌對象，但只包含必填字段或有值的字段
      const logData = {
        username, // 必填
        action, // 必填
        target, // 必填
        details: details || {},
        ip
      };

      // 只有當 userId 不為 null 或 undefined 時才添加
      if (userId) {
        logData.user = userId;
      }

      // 只有當 targetId 不為 null 或 undefined 時才添加
      if (targetId) {
        logData.targetId = targetId;
      }

      const log = new Log(logData);
      await log.save();

      // 在控制台輸出成功信息
      console.log(
        `成功記錄操作日誌 [${new Date().toLocaleString()}]: ${username} 執行了 ${action} ：${target} (ID: ${
          targetId || "N/A"
        })`
      );

      return log;
    } catch (error) {
      console.error("記錄日誌時出錯:", error);
      // 不拋出錯誤，確保主要業務邏輯不受影響
    }
  }
};

module.exports = logService;
