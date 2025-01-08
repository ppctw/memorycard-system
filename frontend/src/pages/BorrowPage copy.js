import React, { useState, useEffect } from "react";

const BorrowPage = () => {
  const [formData, setFormData] = useState({
    cardId: "",
    borrowerName: "",
    borrowDate: "",
    notes: "",
  });
  const [borrowList, setBorrowList] = useState([]);

  // 取得所有借用紀錄
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //新增一筆紀錄
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/api/borrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("借用記錄已提交！");
        setFormData({ cardId: "", borrowerName: "", borrowDate: "", notes: "" });
        // 更新借用清單
        const newBorrow = await response.json();
        setBorrowList((prev) => [...prev, newBorrow]);
      } else {
        alert("提交失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("提交錯誤：", error);
    }
  };

  //刪除一筆紀錄
  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除此記錄嗎？")) return;
  
    try {
      const response = await fetch(`http://localhost:3002/api/borrow/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("刪除成功！");
        setBorrowList(borrowList.filter((item) => item._id !== id));
      } else {
        alert("刪除失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("刪除錯誤：", error);
    }
  };
  

  const handleEdit = (item) => {
    // 將數據加載到表單中進行編輯
    setFormData({
      cardId: item.cardId,
      borrowerName: item.borrowerName,
      borrowDate: new Date(item.borrowDate).toISOString().slice(0, 16), // 格式化日期
      notes: item.notes,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      

      {/* 右側：借用表單 */}
      <div className="w-1/3 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">借用記憶卡</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            提交借用
          </button>
        </form>
      </div>
       {/* 左側：借用清單 */}
{/* 借用清單部分 */}
<div className="w-2/3 bg-white p-6 shadow-md">
  <h2 className="text-2xl font-bold mb-4">借用清單</h2>
  <div className="overflow-x-auto">
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
        {borrowList.length > 0 ? (
          borrowList.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{item.cardId}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{item.borrowerName}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                {new Date(item.borrowDate).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{item.notes || "無"}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                {/* 編輯按鈕 */}
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2"
                >
                  編輯
                </button>
                {/* 刪除按鈕 */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  刪除
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="5"
              className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-500"
            >
              目前沒有借用記錄。
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default BorrowPage;
