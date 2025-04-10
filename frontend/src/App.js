import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MemoryCardDetail from "./pages/MemoryCardDetail";
import AddMemoryCard from "./pages/AddMemoryCard";
import UserManagementPage from "./pages/UserManagementPage";
import BorrowPage from "./pages/BorrowPage"; // 引入借用頁面
import ProtectedRoute from "./components/ProtectedRoute";
import BorrowPageWithCards from "./pages/BorrowPageWithCards";
import LogsPage from "./pages/LogsPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/add-memorycard"
          element={
            <ProtectedRoute role={["admin", "manager"]}>
              <AddMemoryCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-management"
          element={
            <ProtectedRoute role={["admin", "manager"]}>
              <UserManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/memorycards/:id"
          element={<MemoryCardDetail />}
        />
        <Route
          path="/borrow-memorycard"
          element={<BorrowPage />}
        />{" "}
        {/* 添加路由 */}
        <Route
          path="/borrow-with-cards"
          element={<BorrowPageWithCards />}
        />
        <Route
          path="/logs"
          element={
            <ProtectedRoute role="admin">
              <LogsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
