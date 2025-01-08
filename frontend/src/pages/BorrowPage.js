import React, { useState, useEffect } from "react";
import BorrowForm from "../components/BorrowForm";

const BorrowPage = () => {
  const [borrowList, setBorrowList] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchBorrowList();
  }, []);

  const fetchBorrowList = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/borrow");
      const data = await response.json();
      const sortedData = data.sort((a, b) => new Date(b.borrowDate) - new Date(a.borrowDate));
      setBorrowList(sortedData);
    } catch (error) {
      console.error("無法獲取借用清單：", error);
    }
  };

  const handleAdd = async (formData) => {
    const isCardBorrowed = borrowList.some(
      (item) => item.cardId === formData.cardId && !item.returnDate
    );

    if (isCardBorrowed) {
      alert("該記憶卡尚未歸還，無法再次借用！");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/api/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newRecord = await response.json();
        setBorrowList((prev) => [newRecord, ...prev]);
        alert("新增成功！");
      } else {
        alert("新增失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("新增錯誤：", error);
    }
  };

  const handleEdit = async (formData) => {
    if (!formData._id) {
      console.error("表單數據缺少 ID：", formData);
      alert("無法編輯，缺少記錄的 ID");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3002/api/borrow/${formData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedRecord = await response.json();
        setBorrowList((prev) => {
          const newList = prev.map((item) =>
            item._id === updatedRecord._id ? updatedRecord : item
          );
          return newList.sort((a, b) => new Date(b.borrowDate) - new Date(a.borrowDate));
        });
        setModalData(null);
        alert("編輯成功！");
      } else {
        alert("編輯失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("編輯錯誤：", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除此記錄嗎？")) return;

    try {
      const response = await fetch(`http://localhost:3002/api/borrow/${id}`, {
        method: "DELETE",
      });

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

  const handleReturn = async (id) => {
    try {
      const returnDate = new Date().toISOString();
      const response = await fetch(`http://localhost:3002/api/borrow/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnDate }),
      });

      if (response.ok) {
        const updatedRecord = await response.json();
        setBorrowList((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, returnDate, borrowStatus: false } : item
          )
        );
        alert("歸還成功！");
      } else {
        alert("歸還失敗，請稍後再試。");
      }
    } catch (error) {
      console.error("歸還錯誤：", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="w-1/3 bg-white p-6 shadow-md">
        <BorrowForm onSubmit={handleAdd} />
      </div>

      <div className="w-2/3 bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">借用清單</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                記憶卡編號
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                借用人
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                借用日期
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                歸還日期
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                備註
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {borrowList.map((item) => (
              <tr key={item._id}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.cardId}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.borrowerName}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {new Date(item.borrowDate).toLocaleString("zh-TW", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {item.returnDate
                    ? new Date(item.returnDate).toLocaleString("zh-TW", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.notes || "-"}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {!item.returnDate ? (
                    <>
                      <button
                        onClick={() => setModalData(item)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2">
                        編輯
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mr-2">
                        刪除
                      </button>
                      <button
                        onClick={() => handleReturn(item._id)}
                        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
                        歸還
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">已歸還</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <BorrowForm
              initialData={modalData}
              onSubmit={handleEdit}
              onClose={() => setModalData(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowPage;
