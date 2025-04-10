import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import EditMemoryCard from "../components/EditMemoryCard";
import ImportExcel from "../components/ImportExcel";
import ExcelTemplateDownload from "../components/ExcelTemplateDownload";

const AddMemoryCard = () => {
  const [form, setForm] = useState({
    cardType: "",
    serialNumber: "",
    remarks: "",
    borrowStatus: true,
    customCardType: ""
  });
  const [memoryCards, setMemoryCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCard, setEditingCard] = useState(null);
  const [showImport, setShowImport] = useState(false);
  const navigate = useNavigate();

  const fetchMemoryCards = async () => {
    try {
      const res = await axios.get("/memorycards");
      setMemoryCards(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.msg || "獲取記憶卡失敗");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemoryCards();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "borrowStatus") {
      setForm({
        ...form,
        borrowStatus: value === "true"
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
      ...form,
      cardType: form.cardType === "custom" ? form.customCardType : form.cardType
    };

    try {
      const res = await axios.post("/memorycards", submitData);
      alert("記憶卡新增成功");
      setMemoryCards([...memoryCards, res.data]);
      setForm({
        cardType: "",
        serialNumber: "",
        remarks: "",
        borrowStatus: true,
        customCardType: ""
      });
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.msg || "新增失敗");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("確定要刪除這個記憶卡嗎？")) return;
    try {
      await axios.delete(`/memorycards/${id}`);
      alert("記憶卡已刪除");
      setMemoryCards(memoryCards.filter((card) => card._id !== id));
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.msg || "刪除失敗");
    }
  };

  const handleEdit = (card) => {
    setEditingCard(card);
  };

  const updateMemoryCard = (updatedCard) => {
    setMemoryCards(memoryCards.map((card) => (card._id === updatedCard._id ? updatedCard : card)));
    setEditingCard(null);
  };

  const toggleImport = () => {
    setShowImport(!showImport);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:mr-4 mb-6 md:mb-0">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">記憶卡管理</h1>
            <button
              onClick={toggleImport}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors text-sm">
              {showImport ? "切換到手動新增" : "Excel 批量匯入"}
            </button>
          </div>

          {showImport ? (
            <>
              <ExcelTemplateDownload />
              <ImportExcel onImportSuccess={fetchMemoryCards} />
            </>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">新增記憶卡</h2>

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="cardType">
                  記憶卡類型
                </label>
                {form.cardType === "custom" ? (
                  <input
                    type="text"
                    id="customCardType"
                    name="customCardType"
                    value={form.customCardType || ""}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        customCardType: e.target.value
                      });
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="請輸入記憶卡類型"
                    required
                  />
                ) : (
                  <select
                    id="cardType"
                    name="cardType"
                    value={form.cardType}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        cardType: e.target.value,
                        customCardType: e.target.value === "custom" ? "" : form.customCardType
                      });
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required>
                    <option value="">選擇類型</option>
                    <option value="64G">64G</option>
                    <option value="128G">128G</option>
                    <option value="256G">256G</option>
                    <option value="custom">其他/自訂</option>
                  </select>
                )}
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

              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="borrowStatus">
                  借用狀態
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      id="status-not-borrowed"
                      name="borrowStatus"
                      value={true}
                      checked={form.borrowStatus === true}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    未借出
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      id="status-borrowed"
                      name="borrowStatus"
                      value={false}
                      checked={form.borrowStatus === false}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    已借出
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                新增
              </button>
            </form>
          )}
        </div>

        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">記憶卡列表</h2>
            {loading ? (
              <p className="text-center">載入中...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="py-2 px-4 border-b">編號</th>
                      <th className="py-2 px-4 border-b">記憶卡類型</th>
                      <th className="py-2 px-4 border-b">備註</th>
                      <th className="py-2 px-4 border-b">借用狀態</th>
                      <th className="py-2 px-4 border-b">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memoryCards.length === 0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center py-4">
                          沒有記憶卡資料
                        </td>
                      </tr>
                    ) : (
                      memoryCards.map((card) => (
                        <tr key={card._id}>
                          <td className="py-2 px-4 border-b">{card.serialNumber || "-"}</td>
                          <td className="py-2 px-4 border-b">{card.cardType}</td>
                          <td className="py-2 px-4 border-b">{card.remarks}</td>
                          <td className="py-2 px-4 border-b">
                            <span
                              className={`${
                                card.borrowStatus
                                  ? "bg-yellow-200 text-yellow-800"
                                  : "bg-green-200 text-green-800"
                              } px-2 py-1 rounded`}>
                              {card.borrowStatus ? "未借出" : "已借出"}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b">
                            <button
                              onClick={() => handleEdit(card)}
                              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">
                              編輯
                            </button>
                            <button
                              onClick={() => handleDelete(card._id)}
                              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                              刪除
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {editingCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <EditMemoryCard
              card={editingCard}
              onSave={updateMemoryCard}
              onClose={() => setEditingCard(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMemoryCard;
