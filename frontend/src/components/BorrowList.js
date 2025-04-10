import React from "react";

const BorrowList = ({
  borrowList,
  handleDelete,
  handleReturn,
  setModalData,
  handleEdit,
  borrowCount,
  setBorrowCount
}) => {
  // 先根據借用日期排序，然後取最新的幾筆
  const sortedBorrows = [...borrowList].sort(
    (a, b) => new Date(b.borrowDate) - new Date(a.borrowDate)
  );
  const latestBorrows = sortedBorrows.slice(0, borrowCount);

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center p-6 pb-4">
        <h2 className="text-2xl font-bold">借用清單</h2>
        <div className="flex items-center">
          <label className="mr-2">顯示筆數:</label>
          <select
            value={borrowCount}
            onChange={(e) => setBorrowCount(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1">
            <option value={10}>最新10筆</option>
            <option value={15}>最新15筆</option>
            <option value={20}>最新20筆</option>
            {/* <option value={borrowList.length}>全部筆數</option> */}
          </select>
        </div>
      </div>
      <div className="p-6 pt-0">
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
            {latestBorrows.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.cardId}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.borrowerName}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {new Date(item.borrowDate).toLocaleString("zh-TW", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {item.returnDate
                    ? new Date(item.returnDate).toLocaleString("zh-TW", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
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
    </div>
  );
};

export default BorrowList;
