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
        body: JSON.stringify(formData)
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
        body: JSON.stringify(formData)
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
        method: "DELETE"
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
        body: JSON.stringify({ returnDate })
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
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 左側表單 */}
        {/* <div className="w-full lg:w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <BorrowForm onSubmit={handleAdd} />
          </div>
        </div> */}

        {/* 右側表格 */}
        <div className="w-full ">
          <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">借用清單</h2>
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">記憶卡編號</th>
                  <th className="border p-2 text-left">借用人</th>
                  <th className="border p-2 text-left hidden md:table-cell">借用日期</th>
                  <th className="border p-2 text-left hidden md:table-cell">歸還日期</th>
                  <th className="border p-2 text-left hidden lg:table-cell">備註</th>
                  <th className="border p-2 text-left">操作</th>
                </tr>
              </thead>
              <tbody>
                {borrowList.map((item) => (
                  <tr key={item._id}>
                    <td className="border p-2">{item.cardId}</td>
                    <td className="border p-2">{item.borrowerName}</td>
                    <td className="border p-2 hidden md:table-cell">
                      {new Date(item.borrowDate).toLocaleString()}
                    </td>
                    <td className="border p-2 hidden md:table-cell">
                      {item.returnDate ? new Date(item.returnDate).toLocaleString() : "-"}
                    </td>
                    <td className="border p-2 hidden lg:table-cell">{item.notes || "-"}</td>
                    <td className="border p-2">
                      <div className="flex flex-wrap gap-2">
                        {!item.returnDate ? (
                          <>
                            <button
                              onClick={() => setModalData(item)}
                              className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                              編輯
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                              刪除
                            </button>
                            <button
                              onClick={() => handleReturn(item._id)}
                              className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                              歸還
                            </button>
                          </>
                        ) : (
                          <span className="text-gray-500">已歸還</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
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
