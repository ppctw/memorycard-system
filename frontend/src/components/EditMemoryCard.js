import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const EditMemoryCard = ({ card, onClose, onSave }) => {
  const [form, setForm] = useState({
    cardType: card.cardType || "", // 記憶卡類型
    serialNumber: card.serialNumber || "", // 編號
    remarks: card.remarks || "", // 備註
    borrowStatus: card.borrowStatus || false // 借用狀態
  });

  useEffect(() => {
    // 更新表單狀態，當 `card` 改變時
    setForm({
      cardType: card.cardType || "",
      serialNumber: card.serialNumber || "",
      remarks: card.remarks || "",
      borrowStatus: card.borrowStatus || false // 當 `card` 改變時更新 `borrowStatus`
    });
  }, [card]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "borrowStatus") {
      // 將 value 字串轉換為布林值
      setForm({
        ...form,
        borrowStatus: value === "true" // 當 value 為 "true" 時設為 true，否則為 false
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除這個記憶卡嗎？")) return;
    try {
      await axios.delete(`/memorycards/${id}`);
      alert("記憶卡已刪除");
      // 更新記憶卡列表，從列表中移除刪除的記憶卡
      setMemoryCards(memoryCards.filter((card) => card._id !== id));
      onClose();
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.msg || "刪除失敗");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/memorycards/${card._id}`, form);
      alert("記憶卡更新成功");
      onSave(res.data); // 使用 onSave
      onClose();
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.msg || "更新失敗");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">編輯記憶卡</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="cardType">
              記憶卡類型
            </label>
            <select
              id="cardType"
              name="cardType"
              value={form.cardType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required>
              <option value="">選擇類型</option>
              <option value="64G">64G</option>
              <option value="128G">128G</option>
              <option value="256G">256G</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="serialNumber">
              編號
            </label>
            <input
              type="text"
              id="serialNumber"
              name="serialNumber"
              value={form.serialNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="輸入編號"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="remarks">
              備註
            </label>
            <input
              type="text"
              id="remarks"
              name="remarks"
              value={form.remarks}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="輸入備註"
            />
          </div>

          {/* 借用狀態 */}
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="borrowStatus">
              借用狀態
            </label>

            <div className="mb-2">
              <input
                type="radio"
                id="status-not-borrowed"
                name="borrowStatus"
                value={true}
                checked={form.borrowStatus === true} // 借用狀態為未借出
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="status-not-borrowed">未借出</label>
            </div>

            <div>
              <input
                type="radio"
                id="status-borrowed"
                name="borrowStatus"
                value={false}
                checked={form.borrowStatus === false} // 借用狀態為已借出
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="status-borrowed">已借出</label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600">
              取消
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              更新
            </button>
            <button
              type="button"
              onClick={() => handleDelete(card._id)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600">
              刪除
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMemoryCard;
