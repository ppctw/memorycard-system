import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    role: "user"
  });
  const [editingUserId, setEditingUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  let user = null;

  if (token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      user = JSON.parse(jsonPayload).user;
    } catch (err) {
      console.error("Token 解碼失敗", err);
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/userRoute");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUserId) {
        // 更新用戶
        const response = await axios.put(`/userRoute/${editingUserId}`, formData);
        setUsers(
          users.map((user) => (user._id === editingUserId ? { ...user, ...response.data } : user))
        );
        alert("用戶更新成功");
      } else {
        // 新增用戶
        const response = await axios.post("/userRoute", formData);
        setUsers([...users, response.data]);
        alert("用戶新增成功");
      }

      // 重置表單
      setFormData({
        username: "",
        nickname: "",
        role: "user"
      });
      setEditingUserId(null);
    } catch (error) {
      console.error("Error saving user:", error);
      alert(error.response?.data?.msg || "操作失敗");
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({
      username: user.username,
      nickname: user.nickname,
      role: user.role
    });
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("確定要刪除這個用戶嗎？")) return;
    try {
      // 注意路徑是否正確，移除 /api 前綴
      await axios.delete(`/userRoute/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      alert("用戶已刪除");
    } catch (error) {
      console.error("Error deleting user:", error);
      // 提供詳細的錯誤訊息
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        alert(`刪除失敗: ${error.response.data.msg || error.response.statusText}`);
      } else if (error.request) {
        console.error("Request made but no response received");
        alert("刪除失敗: 伺服器沒有回應");
      } else {
        console.error("Error setting up request:", error.message);
        alert(`刪除失敗: ${error.message}`);
      }
    }
  };

  const handleResetPassword = async (userId) => {
    if (!window.confirm("確定要重置此用戶的密碼嗎？密碼將重置為與用戶名相同。")) return;
    try {
      await axios.put(`/userRoute/${userId}/reset-password`);
      alert("密碼已重置為用戶名");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert(error.response?.data?.msg || "重置密碼失敗");
    }
  };

  const handleCancel = () => {
    setFormData({
      username: "",
      nickname: "",
      role: "user"
    });
    setEditingUserId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">用戶管理</h1>

      <div className="flex flex-col md:flex-row">
        {/* 左側表單 */}
        <div className="md:w-1/3 md:mr-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingUserId ? "更新用戶" : "新增用戶"}
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="username">
                帳號
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              {!editingUserId && (
                <p className="text-sm text-gray-500 mt-1">新用戶的密碼將設置為與帳號相同</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="nickname">
                暱稱
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="role">
                角色
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
                <option value="user">用戶</option>
                <option value="manager">管理員</option>
                {user && user.role === "admin" && <option value="admin">系統管理員</option>}
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                {editingUserId ? "更新用戶" : "新增用戶"}
              </button>
              {editingUserId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200">
                  取消
                </button>
              )}
            </div>
          </form>
        </div>

        {/* 右側用戶列表 */}
        <div className="md:w-2/3">
          {loading ? (
            <p className="text-center">載入中...</p>
          ) : (
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">用戶列表</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b">帳號</th>
                      <th className="py-2 px-4 border-b">暱稱</th>
                      <th className="py-2 px-4 border-b">角色</th>
                      <th className="py-2 px-4 border-b">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length === 0 ? (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center py-4">
                          沒有用戶資料
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr
                          key={user._id}
                          className={editingUserId === user._id ? "bg-blue-50" : ""}>
                          <td className="py-2 px-4 border-b">{user.username}</td>
                          <td className="py-2 px-4 border-b">{user.nickname}</td>
                          <td className="py-2 px-4 border-b">
                            <span
                              className={`inline-block px-2 py-1 rounded ${
                                user.role === "admin"
                                  ? "bg-red-200 text-red-800"
                                  : user.role === "manager"
                                  ? "bg-yellow-200 text-yellow-800"
                                  : "bg-green-200 text-green-800"
                              }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <div className="flex flex-wrap gap-1">
                              <button
                                onClick={() => handleEdit(user)}
                                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 text-xs md:text-sm">
                                編輯
                              </button>
                              <button
                                onClick={() => handleResetPassword(user._id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs md:text-sm">
                                重置密碼
                              </button>
                              <button
                                onClick={() => handleDelete(user._id)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs md:text-sm">
                                刪除
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
