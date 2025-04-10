import React, { useState, useEffect } from "react";
import { getLocalTimeString } from "../utils/timeUtils";
import axios from "../utils/axios";

const BorrowForm = ({ initialData = {}, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    cardId: initialData.cardId || "",
    borrowerName: initialData.borrowerName || "",
    borrowDate: getLocalTimeString(),
    notes: initialData.notes || ""
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/userRoute");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const formatLocalTime = (date) => {
      const offset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - offset).toISOString().slice(0, 16);
    };

    const dateToSet = initialData.borrowDate
      ? formatLocalTime(new Date(initialData.borrowDate))
      : formatLocalTime(new Date());

    setFormData((prev) => ({
      _id: initialData._id, // 保留 _id 字段
      cardId: initialData.cardId || "",
      borrowerName: initialData.borrowerName || "",
      borrowDate: dateToSet,
      notes: initialData.notes || ""
    }));
  }, [initialData.cardId, initialData.borrowerName, initialData.borrowDate, initialData.notes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      if (!initialData._id) {
        setFormData({
          cardId: "",
          borrowerName: "",
          borrowDate: getLocalTimeString(),
          notes: ""
        });
      }
    }
  };

  const handleCancel = () => {
    if (initialData._id) {
      // 編輯模式：恢復到初始的資料
      setFormData({
        _id: initialData._id,
        cardId: initialData.cardId || "",
        borrowerName: initialData.borrowerName || "",
        borrowDate: initialData.borrowDate || getLocalTimeString(),
        notes: initialData.notes || ""
      });
    } else {
      // 新增模式：清空表單
      setFormData({
        cardId: "",
        borrowerName: "",
        borrowDate: getLocalTimeString(),
        notes: ""
      });
    }

    // 如果有 onClose 傳入，就執行 onClose
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">
        {initialData._id ? "編輯借用記錄" : "新增借用記錄"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="cardId"
            className="block text-sm font-medium text-gray-700">
            記憶卡編號
          </label>
          <input
            type="text"
            id="cardId"
            name="cardId"
            value={formData.cardId}
            onChange={handleChange}
            placeholder={"點擊『借用』按鈕自動帶入該記憶卡編號或自行輸入"}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrowerName"
            className="block text-sm font-medium text-gray-700">
            借用人姓名
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="borrowerName"
              name="borrowerName"
              value={formData.borrowerName}
              onChange={handleChange}
              className="mt-1 block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              disabled={users.some((user) => user.nickname === formData.borrowerName)}
              required
            />
            <select
              className="mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.borrowerName} // 確保選擇的使用者顯示在這裡
              onChange={(e) =>
                handleChange({ target: { name: "borrowerName", value: e.target.value } })
              }>
              <option value="">快選使用者</option>
              {users.map((user) => (
                <option
                  key={user._id}
                  value={user.nickname}>
                  {user.nickname}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrowDate"
            className="block text-sm font-medium text-gray-700">
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
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700">
            備註
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleCancel} // 點擊取消時根據模式重設表單
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2">
            取消
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            確定
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowForm;
