import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  LogOut,
  LogIn,
  UserPlus,
  CreditCard,
  ClipboardList,
  Settings,
  Users,
  Menu,
  X
} from "lucide-react";
import logo from "../assets/image/PPC_009.png";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);
  let user = null;

  if (token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      user = JSON.parse(jsonPayload).user;
    } catch (err) {
      console.error("Token 解碼失敗", err);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-[#1a237e] pt-4 pb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-bold text-xl flex items-center transition-all duration-300 hover:text-blue-200">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto mr-2 px-3"
          />
          記憶卡借用系統
        </Link>

        {/* 漢堡選單按鈕 (小螢幕) */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 導航選單 */}
        <div className={`${menuOpen ? "block" : "hidden"} md:flex items-center w-full md:w-auto`}>
          <div className="flex flex-col md:flex-row md:items-center">
            <Link
              to="/borrow-with-cards"
              className="text-white mr-0 md:mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
              <CreditCard
                className="mr-1"
                size={18}
              />
              我要借用
            </Link>

            {token ? (
              <>
                {user && user.role === "admin" && (
                  <>
                    <Link
                      to="/borrow-memorycard"
                      className="text-white mr-0 md:mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                      <ClipboardList
                        className="mr-1"
                        size={18}
                      />
                      借用清單
                    </Link>
                    <Link
                      to="/add-memorycard"
                      className="text-white mr-0 md:mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                      <Settings
                        className="mr-1"
                        size={18}
                      />
                      記憶卡管理
                    </Link>
                    <Link
                      to="/user-management"
                      className="text-white mr-0 md:mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                      <Users
                        className="mr-1"
                        size={18}
                      />
                      用戶管理
                    </Link>
                  </>
                )}
                <button
                  onClick={handleLogout}
                  className="text-white flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                  <LogOut
                    className="mr-1"
                    size={18}
                  />
                  登出
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white mr-0 md:mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                  <LogIn
                    className="mr-1"
                    size={18}
                  />
                  登入
                </Link>
                <Link
                  to="/register"
                  className="text-white flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2">
                  <UserPlus
                    className="mr-1"
                    size={18}
                  />
                  註冊
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
