import React, { useState, useEffect } from "react";
import { Database, Filter, UserCheck, Target, Calendar, RefreshCw } from "lucide-react";
import axios from "../utils/axios";

const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usernames, setUsernames] = useState([]);
  const [actionTypes, setActionTypes] = useState([]);
  const [targetTypes, setTargetTypes] = useState([]);

  // 分頁狀態
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // 篩選狀態
  const [filters, setFilters] = useState({
    username: "",
    action: "",
    target: "",
    startDate: "",
    endDate: ""
  });

  // 初始化加載數據
  useEffect(() => {
    fetchLogs();
    fetchFilterOptions();
  }, [page, limit]);

  // 獲取日誌數據
  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError(null);

      let url = `/logs?page=${page}&limit=${limit}`;

      // 根據篩選條件調整 URL
      if (filters.username) {
        url = `/logs/username/${filters.username}?page=${page}&limit=${limit}`;
      } else if (filters.action) {
        url = `/logs/action/${filters.action}?page=${page}&limit=${limit}`;
      } else if (filters.target) {
        url = `/logs/target/${filters.target}?page=${page}&limit=${limit}`;
      } else if (filters.startDate || filters.endDate) {
        url = `/logs/date-range?page=${page}&limit=${limit}`;
        if (filters.startDate) url += `&startDate=${filters.startDate}`;
        if (filters.endDate) url += `&endDate=${filters.endDate}`;
      }

      const response = await axios.get(url);

      setLogs(response.data.logs);
      setTotal(response.data.total);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (err) {
      console.error("獲取日誌失敗:", err);
      setError("獲取日誌數據失敗，請稍後再試");
      setLoading(false);
    }
  };

  // 獲取篩選選項
  const fetchFilterOptions = async () => {
    try {
      const [usernamesRes, actionTypesRes, targetTypesRes] = await Promise.all([
        axios.get("/logs/usernames"),
        axios.get("/logs/action-types"),
        axios.get("/logs/target-types")
      ]);

      setUsernames(usernamesRes.data);
      setActionTypes(actionTypesRes.data);
      setTargetTypes(targetTypesRes.data);
    } catch (err) {
      console.error("獲取篩選選項失敗:", err);
    }
  };

  // 處理篩選變更
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // 應用篩選條件
  const applyFilters = () => {
    setPage(1); // 重置為第一頁
    fetchLogs();
  };

  // 清除所有篩選條件
  const clearFilters = () => {
    setFilters({
      username: "",
      action: "",
      target: "",
      startDate: "",
      endDate: ""
    });
    setPage(1);
    fetchLogs();
  };

  // 格式化日期時間
  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };

  // 獲取操作類型的顯示文本和顏色
  const getActionInfo = (action) => {
    switch (action) {
      case "create":
        return { text: "創建", color: "bg-green-100 text-green-800" };
      case "update":
        return { text: "更新", color: "bg-yellow-100 text-yellow-800" };
      case "delete":
        return { text: "刪除", color: "bg-red-100 text-red-800" };
      case "borrow":
        return { text: "借出", color: "bg-blue-100 text-blue-800" };
      case "return":
        return { text: "歸還", color: "bg-purple-100 text-purple-800" };
      case "login":
        return { text: "登入", color: "bg-indigo-100 text-indigo-800" };
      case "register":
        return { text: "註冊", color: "bg-pink-100 text-pink-800" };
      case "reset-password":
        return { text: "重置密碼", color: "bg-orange-100 text-orange-800" };
      default:
        return { text: action, color: "bg-gray-100 text-gray-800" };
    }
  };

  // 獲取目標類型的顯示文本
  const getTargetText = (target) => {
    switch (target) {
      case "user":
        return "用戶";
      case "memoryCard":
        return "記憶卡";
      case "borrow":
        return "借用記錄";
      case "borrowEdit":
        return "借用管理";
      default:
        return target;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
          <Database className="mr-2" /> 系統操作日誌
        </h1>

        {/* 篩選條件區 */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-center mb-2">
            <Filter className="mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold">篩選條件</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 用戶名稱篩選 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <UserCheck className="inline mr-1 w-4 h-4" /> 用戶名稱
              </label>
              <select
                name="username"
                value={filters.username}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option value="">全部用戶</option>
                {usernames.map((username) => (
                  <option
                    key={username}
                    value={username}>
                    {username}
                  </option>
                ))}
              </select>
            </div>

            {/* 操作類型篩選 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <RefreshCw className="inline mr-1 w-4 h-4" /> 操作類型
              </label>
              <select
                name="action"
                value={filters.action}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option value="">全部操作</option>
                {actionTypes.map((action) => (
                  <option
                    key={action}
                    value={action}>
                    {getActionInfo(action).text}
                  </option>
                ))}
              </select>
            </div>

            {/* 目標類型篩選 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Target className="inline mr-1 w-4 h-4" /> 目標類型
              </label>
              <select
                name="target"
                value={filters.target}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option value="">全部目標</option>
                {targetTypes.map((target) => (
                  <option
                    key={target}
                    value={target}>
                    {getTargetText(target)}
                  </option>
                ))}
              </select>
            </div>

            {/* 日期範圍篩選 */}
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="inline mr-1 w-4 h-4" /> 日期範圍
              </label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="開始日期"
                />
                <input
                  type="date"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
                  placeholder="結束日期"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={clearFilters}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-300 transition duration-200">
              清除篩選
            </button>
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              套用篩選
            </button>
          </div>
        </div>

        {/* 日誌表格 */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">載入中...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
          ) : logs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">沒有符合條件的日誌記錄</div>
          ) : (
            <>
              <table className="min-w-full bg-white border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      時間
                    </th>
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      用戶
                    </th>
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      操作
                    </th>
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      目標
                    </th>
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      詳細信息
                    </th>
                    <th className="px-4 py-3 border-b border-gray-200 text-left font-semibold text-gray-700">
                      IP 地址
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => {
                    const { text: actionText, color: actionColor } = getActionInfo(log.action);
                    return (
                      <tr
                        key={log._id}
                        className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b border-gray-200 align-top">
                          {formatDateTime(log.timestamp)}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 align-top">
                          {log.username}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 align-top">
                          <span className={`px-2 py-1 rounded-full text-xs ${actionColor}`}>
                            {actionText}
                          </span>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 align-top">
                          {getTargetText(log.target)}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 align-top">
                          <div className="max-h-20 overflow-y-auto text-xs">
                            {log.details ? (
                              <pre className="whitespace-pre-wrap">
                                {JSON.stringify(log.details, null, 2)}
                              </pre>
                            ) : (
                              "-"
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 align-top text-xs">
                          {log.ip || "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* 分頁控制 */}
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                  共 {total} 筆記錄，第 {page} / {totalPages} 頁
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}>
                    上一頁
                  </button>
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages || totalPages === 0}
                    className={`px-4 py-2 rounded ${
                      page === totalPages || totalPages === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}>
                    下一頁
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">每頁顯示:</label>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setLimit(Number(e.target.value));
                      setPage(1);
                    }}
                    className="border border-gray-300 rounded p-1 text-sm">
                    <option value={10}>10 筆</option>
                    <option value={20}>20 筆</option>
                    <option value={50}>50 筆</option>
                    <option value={100}>100 筆</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogsPage;
