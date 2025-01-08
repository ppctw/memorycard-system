import React, { useState, useEffect } from "react";
import BorrowForm from "../components/BorrowForm";

const BorrowPage = () => {
  const [borrowList, setBorrowList] = useState([]);
  const [modalData, setModalData] = useState(null); // 控制彈窗數據

  // 獲取借用清單數據
  useEffect(() => {
    async function fetchBorrowList() {
      try {
        const response = await fetch("http://localhost:3002/api/borrow");
        const data = await response.json();
        setBorrowList(data);
      } catch (error) {
        console.error("無法獲取借用清單：", error);
      }
    }
    fetchBorrowList();
  }, []);

  // 新增記錄
  const handleAdd = async (formData) => {
    try {
      const response = await fetch("http://localhost:3002/api/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newRecord = await response.json();
        setBorrowList((prev) => [...prev, newRecord]);
        alert("新增成功！");
      } else {
        alert("新增失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("新增錯誤：", error);
    }
  };

  // 編輯記錄
  const handleEdit = async (formData) => {
    try {
      const response = await fetch(`http://localhost:3002/api/borrow/${formData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedRecord = await response.json();
        setBorrowList((prev) =>
          prev.map((item) => (item._id === updatedRecord._id ? updatedRecord : item))
        );
        alert("編輯成功！");
        setModalData(null);
      } else {
        alert("編輯失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("編輯錯誤：", error);
    }
  };

  // 刪除記錄
  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除此記錄嗎？")) return;

    try {
      const response = await fetch(`http://localhost:3002/api/borrow/${id}`, { method: "DELETE" });

      if (response.ok) {
        setBorrowList((prev) => prev.filter((item) => item._id !== id));
        alert("刪除成功！");
      } else {
        alert("刪除失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("刪除錯誤：", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      {/* 左側：新增表單 */}
      <div className="w-1/3 bg-white p-6 shadow-md">
        <BorrowForm onSubmit={handleAdd} />
      </div>

      {/* 右側：借用清單 */}
      <div className="w-2/3 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">借用清單</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">記憶卡編號</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">借用人</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">借用日期</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">備註</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">操作</th>
            </tr>
          </thead>
          <tbody>
            {borrowList.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.cardId}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.borrowerName}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{new Date(item.borrowDate).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.notes || "無"}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  <button
                    onClick={() => setModalData(item)} // 彈出編輯視窗
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2"
                  >
                    編輯
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 編輯視窗 */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <BorrowForm
              initialData={modalData}
              onSubmit={handleEdit}
              onClose={() => setModalData(item)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowPage;
