import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let user = null;

    if (token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            user = JSON.parse(jsonPayload).user;
        } catch (err) {
            console.error('Token 解碼失敗', err);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
<nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">記憶卡系統</Link>
        <div>
            <Link to="/" className="text-white mr-4 hover:underline">首頁</Link>
            <Link to="/borrow-memorycard" className="text-white mr-4 hover:underline">借用記憶卡</Link> {/* 新增選項 */}
            {token ? (
                <>
                    {user && user.role === 'admin' && (
                        <>
                            <Link to="/add-memorycard" className="text-white mr-4 hover:underline">新增記憶卡</Link>
                            <Link to="/user-management" className="text-white mr-4 hover:underline">用戶管理</Link>
                        </>
                    )}
                    <button onClick={handleLogout} className="text-white hover:underline">登出</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="text-white mr-4 hover:underline">登入</Link>
                    <Link to="/register" className="text-white hover:underline">註冊</Link>
                </>
            )}
        </div>
    </div>
</nav>

    );
};

export default Navbar;
