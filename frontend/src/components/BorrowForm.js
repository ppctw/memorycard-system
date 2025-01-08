import React, { useState, useEffect } from "react";

const BorrowForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    cardId: "",
    borrowerName: "",
    borrowDate: "",
    notes: "",
  });

  // 使用 useEffect 僅在 initialData 發生變化時更新 formData
  useEffect(() => {
    setFormData({
      cardId: initialData.cardId || "",
      borrowerName: initialData.borrowerName || "",
      borrowDate: initialData.borrowDate
        ? new Date(initialData.borrowDate).toISOString().slice(0, 16)
        : "",
      notes: initialData.notes || "",
    });
  }, [JSON.stringify(initialData)]); // 依賴 JSON.stringify(initialData)，比較值而非引用

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (formData) => {
    try {
      const url = formData._id
        ? `http://localhost:3002/api/borrow/${formData._id}` // 編輯時用 PUT
        : "http://localhost:3002/api/borrow"; // 新增時用 POST
  
      const method = formData._id ? "PUT" : "POST";
  
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const updatedRecord = await response.json();
  
        if (formData._id) {
          // 編輯：更新清單
          setBorrowList((prev) =>
            prev.map((item) => (item._id === updatedRecord._id ? updatedRecord : item))
          );
        } else {
          // 新增：添加到清單
          setBorrowList((prev) => [...prev, updatedRecord]);
        }
  
        alert("操作成功！");
        setModalData(null); // 關閉彈窗
      } else {
        alert("提交失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("提交錯誤：", error);
    }
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">{initialData._id ? "編輯借用記錄" : "新增借用記錄"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardId" className="block text-sm font-medium text-gray-700">
            記憶卡編號
          </label>
          <input
            type="text"
            id="cardId"
            name="cardId"
            value={formData.cardId}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="borrowerName" className="block text-sm font-medium text-gray-700">
            借用人姓名
          </label>
          <input
            type="text"
            id="borrowerName"
            name="borrowerName"
            value={formData.borrowerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="borrowDate" className="block text-sm font-medium text-gray-700">
            借用日期
          </label>
          <input
            type="datetime-local"
            id="borrowDate"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            備註
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
          >
            取消
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            確定
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowForm;
