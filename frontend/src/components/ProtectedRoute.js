import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    let user = null;
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

    if (role && (!user || user.role !== role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
