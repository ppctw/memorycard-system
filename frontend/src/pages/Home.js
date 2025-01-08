import React from "react";
import { Scroll, Bell, Phone } from "lucide-react"; // 引入icon

const borrowingRules = {
  title: "記憶卡借用規則",
  rules: [
    "1. 每次借用需填寫借用表單，包含借用人姓名、借用日期等資訊",
    "2. 借用期限最長為14天",
    "3. 使用完畢後請務必歸還並更新系統狀態",
    "4. 請妥善保管記憶卡，如有遺失或損壞需賠償",
    "5. 同一張記憶卡需等待歸還後才能再次借用",
  ],
  notes: ["※ 如有特殊需求，請聯繫系統管理員", "※ 借用規則可能會視情況調整，請隨時關注最新公告"],
  contact: {
    admin: "系統管理員:舒喬",
    phone: "0976079302",
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 p-4 border-b-4 border-blue-500">
          {borrowingRules.title}
        </h1>

        <div className="grid gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Scroll className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">借用規則</h2>
            </div>
            <ul className="space-y-4">
              {borrowingRules.rules.map((rule, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex items-start">
                  <span className="inline-block w-8 h-8 bg-blue-100 rounded-full text-blue-600 flex items-center justify-center mr-3 font-semibold">
                    {index + 1}
                  </span>
                  <span className="flex-1 pt-1">{rule.substring(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Bell className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">注意事項</h2>
            </div>
            <ul className="space-y-4">
              {borrowingRules.notes.map((note, index) => (
                <li
                  key={index}
                  className="text-gray-700 pl-4 border-l-4 border-yellow-400">
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <Phone className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">聯絡資訊</h2>
            </div>
            <div className="text-gray-700 space-y-3">
              <p className="flex items-center bg-green-50 p-3 rounded-lg">
                <span className="font-semibold mr-2">👤</span>
                {borrowingRules.contact.admin}
              </p>
              <p className="flex items-center bg-green-50 p-3 rounded-lg">
                <span className="font-semibold mr-2">📱</span>
                電話: {borrowingRules.contact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
