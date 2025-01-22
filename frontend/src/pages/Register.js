import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    role: "user"
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", form);
      alert("註冊成功，請登入");
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.msg || "註冊失敗");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">註冊</h2>

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
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="輸入用戶名"
            required
          />
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
            value={form.nickname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="輸入暱稱"
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
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="輸入密碼"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 mb-2"
            htmlFor="role">
            角色
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required>
            <option value="user">用戶</option>
            {/* <option value="admin">管理員</option> */}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
          註冊
        </button>

        <p className="mt-4 text-center text-gray-600">
          已有帳號？{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline">
            登入
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
