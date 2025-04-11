import React, { useState } from "react";
import axios from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 引入眼睛圖示

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    role: "user"
  });
  const [adminCode, setAdminCode] = useState("");
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminCode, setShowAdminCode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 如果選擇了管理員角色，顯示驗證視窗
    if (name === "role" && value === "admin") {
      setShowAdminModal(true);
    }

    setForm({ ...form, [name]: value });
  };

  const handleAdminCodeChange = (e) => {
    setAdminCode(e.target.value);
  };

  const handleVerifyAdmin = () => {
    if (adminCode === "ppcmedia") {
      alert("驗證成功！"); // 驗證成功時顯示提示
      setShowAdminModal(false);
    } else {
      alert("驗證碼錯誤，無法註冊為管理員");
      setForm({ ...form, role: "user" });
      setShowAdminModal(false);
    }
  };

  const handleCancelAdmin = () => {
    setForm({ ...form, role: "user" });
    setAdminCode("");
    setShowAdminModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAdminCodeVisibility = () => {
    setShowAdminCode(!showAdminCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 確認管理員身份驗證
    if (form.role === "admin" && adminCode !== "ppcmedia") {
      alert("新增管理員權限請洽管理者");
      return;
    }

    try {
      const res = await axios.post("/users/register", form);
      alert("註冊成功，請登入");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.msg || "註冊失敗");
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-indigo-600 to-indigo-900">
      <div className="absolute inset-0 w-full h-full">
        {/* <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,600 L400,400 L800,550 L1200,350 L1600,500 L1920,450 L1920,1080 L0,1080 Z"
            fill="#2B2B54"
            opacity="0.8"
          />
          <path
            d="M0,700 L500,500 L900,650 L1400,450 L1920,600 L1920,1080 L0,1080 Z"
            fill="#1F1F44"
            opacity="0.9"
          />
          <path
            d="M0,800 L600,600 L1200,750 L1920,650 L1920,1080 L0,1080 Z"
            fill="#13122E"
          />

          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 500}
              r={Math.random() * 2}
              fill="#FFFFFF"
              opacity={0.5 + Math.random() * 0.5}
            />
          ))}
        </svg> */}
      </div>

      {/* Register Form */}
      <div className="relative min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-96 p-8 rounded-2xl backdrop-blur-md bg-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">註冊帳號</h2>

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

          <div className="mb-4">
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              placeholder="輸入用戶名稱"
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              placeholder="輸入密碼"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
              onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="mb-6">
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              required>
              <option value="user">用戶</option>
              <option value="manager">管理員</option>
              <option value="admin">系統管理員</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-indigo-700 font-medium 
                     relative transition-all duration-300 ease-out
                     hover:scale-[1.02] active:scale-[0.98]
                     after:content-[''] after:absolute after:inset-0
                     after:rounded-lg after:border-2 after:border-white/0
                     after:transition-all after:duration-300
                     hover:after:inset-[-3px] hover:after:border-white/50">
            建立帳號
          </button>

          <p className="mt-4 text-center text-white/70">
            已有帳號？{" "}
            <Link
              to="/login"
              className="text-white hover:text-white/90 hover:underline">
              登入
            </Link>
          </p>
        </form>
      </div>

      {/* 管理員驗證視窗 */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-indigo-900/80 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-white">管理員身份驗證</h3>
            <p className="mb-4 text-white/80">請輸入管理員驗證碼以註冊為管理員</p>

            <div className="mb-4">
              <div className="relative">
                <input
                  type={showAdminCode ? "text" : "password"}
                  id="adminCode"
                  value={adminCode}
                  onChange={handleAdminCodeChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="輸入驗證碼"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={toggleAdminCodeVisibility}>
                  {showAdminCode ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancelAdmin}
                className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-all duration-200">
                取消
              </button>
              <button
                type="button"
                onClick={handleVerifyAdmin}
                className="px-4 py-2 bg-white text-indigo-700 font-medium rounded hover:bg-white/90 transition-all duration-200">
                確認
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
