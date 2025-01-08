import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MemoryCardDetail from './pages/MemoryCardDetail';
import AddMemoryCard from './pages/AddMemoryCard';
import UserManagementPage from './pages/UserManagementPage';
import BorrowPage from './pages/BorrowPage'; // 引入借用頁面
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/add-memorycard" 
          element={
            <ProtectedRoute role="admin">
              <AddMemoryCard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user-management" 
          element={
            <ProtectedRoute role="admin">
              <UserManagementPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={<Home />} />
        <Route path="/memorycards/:id" element={<MemoryCardDetail />} />
        <Route path="/borrow-memorycard" element={<BorrowPage />} /> {/* 添加路由 */}
      </Routes>
    </Router>
  );
}

export default App;
