import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.msg || "登入失敗");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-purple-600 to-purple-900">
      {/* Background Mountains and Stars */}
      <div className="absolute inset-0 w-full h-full">
        {/* <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,600 L400,400 L800,550 L1200,350 L1600,500 L1920,450 L1920,1080 L0,1080 Z"
            fill="#2B1B54"
            opacity="0.8"
          />
          <path
            d="M0,700 L500,500 L900,650 L1400,450 L1920,600 L1920,1080 L0,1080 Z"
            fill="#1F1444"
            opacity="0.9"
          />
          <path
            d="M0,800 L600,600 L1200,750 L1920,650 L1920,1080 L0,1080 Z"
            fill="#130C2E"
          />
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 500}
              r="1"
              fill="#FFFFFF"
              opacity={0.5 + Math.random() * 0.5}
            />
          ))}
        </svg> */}
      </div>

      {/* Login Form */}
      <div className="relative min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-96 p-8 rounded-2xl backdrop-blur-md bg-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">登入</h2>

          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              placeholder="輸入帳號"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              placeholder="輸入密碼"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-purple-700 font-medium 
                     relative transition-all duration-300 ease-out
                     hover:scale-[1.02] active:scale-[0.98]
                     after:content-[''] after:absolute after:inset-0
                     after:rounded-lg after:border-2 after:border-white/0
                     after:transition-all after:duration-300
                     hover:after:inset-[-3px] hover:after:border-white/50">
            登入
          </button>

          <p className="mt-4 text-center text-white">
            還沒有帳號？{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline">
              註冊
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
