import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import BorrowForm from "../components/BorrowForm";
import AvailableCards from "../components/AvailableCards";
import BorrowList from "../components/BorrowList";

const BorrowPageWithCards = () => {
  const [borrowList, setBorrowList] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [cardModalData, setCardModalData] = useState(null);
  const [currentFormData, setCurrentFormData] = useState({
    cardId: "",
    borrowerName: "",
    borrowDate: "",
    notes: ""
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [borrowCount, setBorrowCount] = useState(10);

  useEffect(() => {
    async function fetchBorrowList() {
      try {
        const response = await axios.get("/borrow");
        setBorrowList(response.data);
      } catch (error) {
        console.error("無法獲取借用清單：", error);
      }
    }
    fetchBorrowList();
  }, [refreshKey]);

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
      setBorrowList((prev) => [response.data, ...prev]);
      setCurrentFormData({
        cardId: "",
        borrowerName: "",
        borrowDate: "",
        notes: ""
      });
      setRefreshKey((prev) => prev + 1);
      alert("新增成功！");
    } catch (error) {
      console.error("新增錯誤：", error);
      alert("新增失敗，請稍後再試。");
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
      setBorrowList((prev) =>
        prev.map((item) => (item._id === response.data._id ? response.data : item))
      );
      alert("編輯成功！");
      setModalData(null);
    } catch (error) {
      console.error("編輯錯誤：", error);
      alert("編輯失敗，請稍後再試。");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除此記錄嗎？")) return;

    try {
      await axios.delete(`/borrow/${id}`);
      setBorrowList((prev) => prev.filter((item) => item._id !== id));
      setRefreshKey((prev) => prev + 1);
      alert("刪除成功！");
    } catch (error) {
      console.error("刪除錯誤：", error);
      alert("刪除失敗，請稍後再試。");
    }
  };

  const handleReturn = async (id) => {
    const returnDate = new Date().toISOString();

    try {
      const response = await axios.put(`/borrow/${id}`, { returnDate });
      setBorrowList((prev) =>
        prev.map((item) =>
          item._id === response.data._id ? { ...item, returnDate, borrowStatus: false } : item
        )
      );
      setRefreshKey((prev) => prev + 1);
      alert("歸還成功！");
    } catch (error) {
      console.error("歸還錯誤：", error);
      alert("歸還失敗，請稍後再試。");
    }
  };

  const handleBorrow = (serialNumber) => {
    const isCardBorrowed = borrowList.some(
      (item) => item.cardId === serialNumber && !item.returnDate
    );

    if (isCardBorrowed) {
      alert("該記憶卡尚未歸還，無法再次借用！");
      return;
    }

    setCurrentFormData((prev) => ({
      ...prev,
      cardId: serialNumber
    }));
    setSelectedCardId(serialNumber);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="w-1/3 bg-white p-6 shadow-md">
        <BorrowForm
          initialData={currentFormData}
          onSubmit={handleAdd}
          onClose={() =>
            setCurrentFormData({
              cardId: "",
              borrowerName: "",
              borrowDate: "",
              notes: ""
            })
          }
        />
      </div>

      <div className="w-2/3 bg-white p-6 shadow-md">
        <AvailableCards
          handleBorrow={handleBorrow}
          isFormOpen={isFormOpen}
          refreshKey={refreshKey}
        />
        <BorrowList
          borrowList={borrowList}
          handleDelete={handleDelete}
          handleReturn={handleReturn}
          setModalData={setModalData}
          handleEdit={handleEdit}
          borrowCount={borrowCount}
          setBorrowCount={setBorrowCount}
        />
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

export default BorrowPageWithCards;
