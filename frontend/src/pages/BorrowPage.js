import React, { useState, useEffect } from "react";
import BorrowForm from "../components/BorrowForm";
import axios from "../utils/axios";

const BorrowPage = () => {
  const [borrowList, setBorrowList] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 查詢條件 state
  const [searchCardId, setSearchCardId] = useState("");
  const [searchBorrower, setSearchBorrower] = useState("");
  const [searchBorrowDateStart, setSearchBorrowDateStart] = useState("");
  const [searchBorrowDateEnd, setSearchBorrowDateEnd] = useState("");
  const [searchReturnDateStart, setSearchReturnDateStart] = useState("");
  const [searchReturnDateEnd, setSearchReturnDateEnd] = useState("");

  useEffect(() => {
    fetchBorrowList();
  }, []);

  const fetchBorrowList = async () => {
    try {
      const response = await axios.get("/borrow");
      const sortedData = response.data.sort(
        (a, b) => new Date(b.borrowDate) - new Date(a.borrowDate)
      );
      setBorrowList(sortedData);
    } catch (error) {
      console.error("無法獲取借用清單：", error);
    }
  };

  // 依查詢條件過濾資料
  const filteredBorrowList = borrowList.filter((item) => {
    let match = true;
    // 記憶卡編號查詢(包含關係)
    if (searchCardId) {
      match = match && item.cardId.includes(searchCardId);
    }
    // 借用人查詢（不區分大小寫）
    if (searchBorrower) {
      match = match && item.borrowerName.toLowerCase().includes(searchBorrower.toLowerCase());
    }
    // 借用日期範圍查詢
    if (searchBorrowDateStart) {
      const itemBorrow = new Date(item.borrowDate);
      const start = new Date(searchBorrowDateStart);
      match = match && itemBorrow >= start;
    }
    if (searchBorrowDateEnd) {
      const itemBorrow = new Date(item.borrowDate);
      const end = new Date(searchBorrowDateEnd);
      match = match && itemBorrow <= end;
    }
    // 歸還日期範圍查詢（若資料無歸還日期則不匹配）
    if (searchReturnDateStart) {
      if (!item.returnDate) {
        match = false;
      } else {
        const itemReturn = new Date(item.returnDate);
        const start = new Date(searchReturnDateStart);
        match = match && itemReturn >= start;
      }
    }
    if (searchReturnDateEnd) {
      if (!item.returnDate) {
        match = false;
      } else {
        const itemReturn = new Date(item.returnDate);
        const end = new Date(searchReturnDateEnd);
        match = match && itemReturn <= end;
      }
    }
    return match;
  });

  // 計算分頁總頁數 (根據過濾後的資料)
  const totalPages = Math.ceil(filteredBorrowList.length / itemsPerPage);

  // 取得當前頁面的資料
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBorrowList.slice(startIndex, startIndex + itemsPerPage);
  };

  // 處理頁碼變更
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 處理每頁顯示筆數變更
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // 重置查詢條件
  const handleResetSearch = () => {
    setSearchCardId("");
    setSearchBorrower("");
    setSearchBorrowDateStart("");
    setSearchBorrowDateEnd("");
    setSearchReturnDateStart("");
    setSearchReturnDateEnd("");
    setCurrentPage(1);
  };

  // --------------------- API 操作函式 ---------------------
  const handleAdd = async (formData) => {
    const isCardBorrowed = borrowList.some(
      (item) => item.cardId === formData.cardId && !item.returnDate
    );

    if (isCardBorrowed) {
      alert("該記憶卡尚未歸還，無法再次借用！");
      return;
    }
    try {
      const response = await axios.post("/borrow", formData);
      if (response.status === 200) {
        setBorrowList((prev) => [response.data, ...prev]);
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
      const response = await axios.put(`/borrow/${formData._id}`, formData);
      if (response.status === 200) {
        setBorrowList((prev) =>
          prev.map((item) => (item._id === response.data._id ? response.data : item))
        );
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
      const response = await axios.delete(`/borrow/${id}`);
      if (response.status === 200) {
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
      const response = await axios.put(`/borrow/${id}`, { returnDate });
      if (response.status === 200) {
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
      {/* 查詢條件表單 */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-2">查詢條件</h3>
        <div className="flex flex-wrap gap-4">
          {/* 記憶卡編號 */}
          <div>
            <label className="block text-sm">記憶卡編號</label>
            <input
              type="text"
              placeholder="輸入記憶卡編號"
              className="mt-1 px-2 py-1 border rounded"
              value={searchCardId}
              onChange={(e) => setSearchCardId(e.target.value)}
            />
          </div>
          {/* 借用人 */}
          <div>
            <label className="block text-sm">借用人</label>
            <input
              type="text"
              placeholder="輸入借用人姓名"
              className="mt-1 px-2 py-1 border rounded"
              value={searchBorrower}
              onChange={(e) => setSearchBorrower(e.target.value)}
            />
          </div>
          {/* 借用日期區間 */}
          <div>
            <label className="block text-sm">借用日期起</label>
            <input
              type="date"
              className="mt-1 px-2 py-1 border rounded"
              value={searchBorrowDateStart}
              onChange={(e) => setSearchBorrowDateStart(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm">借用日期迄</label>
            <input
              type="date"
              className="mt-1 px-2 py-1 border rounded"
              value={searchBorrowDateEnd}
              onChange={(e) => setSearchBorrowDateEnd(e.target.value)}
            />
          </div>
          {/* 歸還日期區間 */}
          <div>
            <label className="block text-sm">歸還日期起</label>
            <input
              type="date"
              className="mt-1 px-2 py-1 border rounded"
              value={searchReturnDateStart}
              onChange={(e) => setSearchReturnDateStart(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm">歸還日期迄</label>
            <input
              type="date"
              className="mt-1 px-2 py-1 border rounded"
              value={searchReturnDateEnd}
              onChange={(e) => setSearchReturnDateEnd(e.target.value)}
            />
          </div>
        </div>
        {/* 重置按鈕 */}
        <div className="mt-4">
          <button
            onClick={handleResetSearch}
            className="px-4 py-2 bg-gray-500 text-white rounded">
            重置查詢
          </button>
        </div>
      </div>

      {/* 表格與分頁 */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
            {/* 標題與每頁顯示筆數控制在同一行 */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl lg:text-2xl font-bold">借用清單</h2>
              <div className="flex items-center">
                <span>每頁顯示</span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="mx-2 px-2 py-1 rounded">
                  {[10, 20, 30].map((count) => (
                    <option
                      key={count}
                      value={count}>
                      {count} 筆
                    </option>
                  ))}
                </select>
                <span>筆資料</span>
              </div>
            </div>

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
                {paginateData().map((item) => (
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

            {/* 表格下方分頁按鈕，置中 */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`mx-1 px-4 py-2 rounded ${
                    currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-300"
                  }`}>
                  {pageNumber}
                </button>
              ))}
            </div>
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
