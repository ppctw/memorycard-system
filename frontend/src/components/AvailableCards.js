import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const AvailableCards = ({ handleBorrow, isFormOpen, refreshKey }) => {
  const [availableCards, setAvailableCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    async function fetchAvailableCards() {
      try {
        const response = await axios.get("/memorycards");
        if (Array.isArray(response.data)) {
          setAvailableCards(response.data);
        } else {
          console.error("資料不是陣列", response.data);
        }
      } catch (error) {
        console.error("無法獲取記憶卡數據：", error);
      }
    }
    fetchAvailableCards();
  }, [refreshKey]);

  const handleBorrowClick = (serialNumber) => {
    setSelectedCardId(serialNumber);
    handleBorrow(serialNumber);
  };

  return (
    <div className="w-full bg-white p-6 shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">目前有的記憶卡</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              記憶卡編號
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              類型
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              備註
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              狀態
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          {availableCards.map((card) => (
            <tr key={card._id}>
              <td className="border border-gray-300 px-4 py-2 text-sm">{card.serialNumber}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">{card.cardType}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">{card.remarks || "-"}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                <span
                  className={`${
                    card.borrowStatus
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  } px-2 py-1 rounded`}>
                  {card.borrowStatus ? "已借出" : "未借出"}
                </span>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                {!card.borrowStatus && (
                  <button
                    onClick={() => handleBorrowClick(card.serialNumber)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md">
                    借用
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableCards;
