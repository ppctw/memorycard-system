import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import EditMemoryCard from '../components/EditMemoryCard'; // 我們稍後會創建這個組件

const AddMemoryCard = () => {
    const [form, setForm] = useState({
        cardType: '', // 記憶卡類型
        serialNumber: '', // 編號
        remarks: '', // 備註
    });
    const [memoryCards, setMemoryCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingCard, setEditingCard] = useState(null); // 管理正在編輯的記憶卡
    const navigate = useNavigate();

    // 獲取所有記憶卡
    const fetchMemoryCards = async () => {
        try {
            const res = await axios.get('/memorycards');
            setMemoryCards(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err.response.data);
            alert(err.response.data.msg || '獲取記憶卡失敗');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMemoryCards();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/memorycards', form);
            alert('記憶卡新增成功');
            // 更新記憶卡列表
            setMemoryCards([...memoryCards, res.data]);
            // 清空表單
            setForm({
                cardType: '',
                serialNumber: '',
                remarks: '',
            });
        } catch (err) {
            console.error(err.response.data);
            alert(err.response.data.msg || '新增失敗');
        }
    };

    // 處理刪除記憶卡
    const handleDelete = async (id) => {
        if (!window.confirm('確定要刪除這個記憶卡嗎？')) return;
        try {
            await axios.delete(`/memorycards/${id}`);
            alert('記憶卡已刪除');
            // 更新記憶卡列表
            setMemoryCards(memoryCards.filter(card => card._id !== id));
        } catch (err) {
            console.error(err.response.data);
            alert(err.response.data.msg || '刪除失敗');
        }
    };

    // 處理編輯記憶卡
    const handleEdit = (card) => {
        setEditingCard(card);
    };

    // 更新記憶卡後刷新列表
    const updateMemoryCard = (updatedCard) => {
        setMemoryCards(memoryCards.map(card => (card._id === updatedCard._id ? updatedCard : card)));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                {/* 新增記憶卡表單 */}
                <div className="md:w-1/3 md:mr-4">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">新增記憶卡</h2>
                        
                        {/* 記憶卡類型 */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="cardType">記憶卡類型</label>
                            <select
                                id="cardType"
                                name="cardType"
                                value={form.cardType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                required
                            >
                                <option value="">選擇類型</option>
                                <option value="64G">64G</option>
                                <option value="128G">128G</option>
                                <option value="256G">256G</option>
                            </select>
                        </div>

                        {/* 編號 */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="serialNumber">編號</label>
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

                        {/* 備註 */}
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="remarks">備註</label>
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

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            新增
                        </button>
                    </form>
                </div>

                {/* 記憶卡資料表格 */}
                <div className="md:w-2/3 mt-6 md:mt-0">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">記憶卡列表</h2>
                        {loading ? (
                            <p className="text-center">載入中...</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b">名稱</th>
                                            <th className="py-2 px-4 border-b">編號</th>
                                            <th className="py-2 px-4 border-b">備註</th>
                                            <th className="py-2 px-4 border-b">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {memoryCards.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4">沒有記憶卡資料</td>
                                            </tr>
                                        ) : (
                                            memoryCards.map(card => (
                                                <tr key={card._id}>
                                                    <td className="py-2 px-4 border-b">{card.cardType}</td>
                                                    <td className="py-2 px-4 border-b">{card.serialNumber || '-'}</td>
                                                    <td className="py-2 px-4 border-b">{card.remarks}</td>
                                                    <td className="py-2 px-4 border-b">
                                                        <button
                                                            onClick={() => handleEdit(card)}
                                                            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                                                        >
                                                            編輯
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(card._id)}
                                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                        >
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

            {/* 編輯記憶卡的彈出窗口 */}
            {editingCard && (
                <EditMemoryCard
                    card={editingCard}
                    onClose={() => setEditingCard(null)}
                    onUpdate={updateMemoryCard}
                />
            )}
        </div>
    );
}

export default AddMemoryCard;
