import React, { useState, useEffect } from "react";
import axios from "../utils/axios"; // 確保 utils/axios 已正確配置

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "user"
  });
  const [editingUserId, setEditingUserId] = useState(null);
  const [loading, setLoading] = useState(true);

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
        await axios.put(`userRoute/${editingUserId}`, formData);
        alert("用戶更新成功");
      } else {
        await axios.post("userRoute", formData);
        alert("用戶新增成功");
      }
      setFormData({ username: "", password: "", role: "user" });
      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
      alert("操作失敗");
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({
      username: user.username,
      password: "",
      role: user.role
    });
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("確定要刪除這個用戶嗎？")) return;
    try {
      await axios.delete(`userRoute/${userId}`);
      alert("用戶已刪除");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("刪除失敗");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">用戶管理</h1>

      <div className="flex flex-col md:flex-row">
        {/* 左側新增用戶表單 */}
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
                用戶名
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
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="password">
                密碼
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                required={!editingUserId} // 如果是編輯模式，密碼可選
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
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
              {editingUserId ? "更新用戶" : "新增用戶"}
            </button>
          </form>
        </div>

        {/* 右側用戶列表表格 */}
        <div className="md:w-2/3">
          {loading ? (
            <p className="text-center">載入中...</p>
          ) : (
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-4">用戶列表</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">用戶名</th>
                    <th className="py-2 px-4 border-b">角色</th>
                    <th className="py-2 px-4 border-b">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="text-center py-4">
                        沒有用戶資料
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td className="py-2 px-4 border-b">{user.username}</td>
                        <td className="py-2 px-4 border-b">{user.role}</td>
                        <td className="py-2 px-4 border-b">
                          <button
                            onClick={() => handleEdit(user)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">
                            編輯
                          </button>
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                            刪除
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
