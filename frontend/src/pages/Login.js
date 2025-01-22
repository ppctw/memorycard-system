// frontend/src/pages/Login.js

import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate, Link, UserPlus } from "react-router-dom";

const Login = () => {
  // 定義表單狀態
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // 處理表單輸入變化
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 發送登入請求
      const res = await axios.post("/users/login", form);
      // 儲存 token 到本地存儲
      localStorage.setItem("token", res.data.token);
      // 重定向到主頁
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.msg || "登入失敗");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">登入</h2>
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
            placeholder="輸入帳號"
            required
          />
        </div>
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
          登入
        </button>
        {/* <p className="mt-4 text-center text-gray-600">
          還沒有帳號？{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline">
            註冊
          </Link>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
