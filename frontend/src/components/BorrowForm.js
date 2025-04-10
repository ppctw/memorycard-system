import React, { useState, useEffect } from "react";
import { getLocalTimeString } from "../utils/timeUtils";
import axios from "../utils/axios";

const BorrowForm = ({ initialData = {}, onSubmit, onClose, user }) => {
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
    setFormData((prev) => ({
      ...prev,
      cardId: initialData.cardId || "",
      borrowerName: initialData.borrowerName || "",
      borrowDate: getLocalTimeString(),
      notes: initialData.notes || ""
    }));
  }, [initialData.cardId, initialData.borrowerName, initialData.notes]);

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
          borrowerName: user ? user.nickname : "",
          borrowDate: getLocalTimeString(),
          notes: ""
        });
      }
    }
  };

  const isAdmin = user && (user.role === "admin" || user.role === "manager");

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
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              !isAdmin
                ? "bg-gray-200 cursor-not-allowed"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
            readOnly={!isAdmin} // Or change to disabled={!isAdmin}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrowerName"
            className="block text-sm font-medium text-gray-700">
            借用人姓名
          </label>
          <input
            type="text"
            id="borrowerName"
            name="borrowerName"
            value={formData.borrowerName}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              !isAdmin
                ? "bg-gray-200 cursor-not-allowed"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
            readOnly={!isAdmin} // Or change to disabled={!isAdmin}
          />
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
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm ${
              !isAdmin
                ? "bg-gray-200 cursor-not-allowed"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
            readOnly={!isAdmin} // Or change to disabled={!isAdmin}
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
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2">
              取消
            </button>
          )}
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
