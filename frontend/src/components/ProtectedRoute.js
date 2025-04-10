import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  let user = null;
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

  // 如果需要角色檢查
  if (role) {
    // 將單個角色轉換為數組以統一處理
    const requiredRoles = Array.isArray(role) ? role : [role];

    // 檢查用戶是否有任何一個所需的角色
    const hasRequiredRole = user && requiredRoles.includes(user.role);

    if (!hasRequiredRole) {
      return (
        <Navigate
          to="/"
          replace
        />
      );
    }
  }

  return children;
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, role }) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         return <Navigate to="/login" replace />;
//     }

//     let user = null;
//     try {
//         const base64Url = token.split('.')[1];
//         const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//         const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//         }).join(''));
//         user = JSON.parse(jsonPayload).user;
//     } catch (err) {
//         console.error('Token 解碼失敗', err);
//     }

//     if (role && (!user || user.role !== role)) {
//         return <Navigate to="/" replace />;
//     }

//     return children;
// };

// export default ProtectedRoute;
