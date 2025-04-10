import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "../utils/axios";

const ImportExcel = ({ onImportSuccess }) => {
  const [file, setFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importStats, setImportStats] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImportStats(null); // 重置狀態
    }
  };

  const processExcelData = async (data) => {
    // 初始化統計數據
    let stats = {
      total: data.length - 1, // 減去表頭行
      success: 0,
      failed: 0,
      errors: []
    };

    // 遍歷每一行數據，從第二行開始(跳過表頭)
    for (let i = 1; i < data.length; i++) {
      try {
        const row = data[i];
        // 獲取各欄位值
        const cardType = row[0]; // 第一欄：記憶卡類型
        const serialNumber = row[1]; // 第二欄：編號
        const remarks = row[2]; // 第三欄：備註
        const borrowStatus = row[3]; // 第四欄：借用狀態

        // 檢查必要字段
        if (!cardType) {
          throw new Error(`記憶卡類型是必填欄位`);
        }

        // 格式化數據
        const cardData = {
          cardType: cardType,
          serialNumber: serialNumber || "",
          remarks: remarks || "",
          // 借用狀態: N=未借出，Y=已借出
          borrowStatus: !(borrowStatus === "Y" || borrowStatus === "y") // 反轉邏輯以符合後端定義
        };

        // 發送請求創建記憶卡
        await axios.post("/memorycards", cardData);
        stats.success++;
      } catch (error) {
        stats.failed++;
        const errorMsg = error.response?.data?.msg || error.message;
        stats.errors.push(`行 ${i + 1}: ${errorMsg}`);
      }
    }

    return stats;
  };

  const handleImport = async () => {
    if (!file) return;

    setImporting(true);
    setImportStats(null);

    try {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });

          // 假設我們使用第一個工作表
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];

          // 將數據轉換為二維數組，而不是JSON
          const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // 處理數據並進行匯入
          const importResults = await processExcelData(sheetData);
          setImportStats(importResults);

          // 如果有成功匯入的記錄，觸發成功回調
          if (importResults.success > 0 && onImportSuccess) {
            onImportSuccess();
          }
        } catch (error) {
          console.error("處理 Excel 文件時出錯:", error);
          setImportStats({
            total: 0,
            success: 0,
            failed: 0,
            errors: ["處理 Excel 文件時出錯: " + error.message]
          });
        } finally {
          setImporting(false);
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("讀取文件時出錯:", error);
      setImportStats({
        total: 0,
        success: 0,
        failed: 0,
        errors: ["讀取文件時出錯: " + error.message]
      });
      setImporting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">從 Excel 匯入記憶卡</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          選擇 Excel 文件 (.xlsx, .xls)
        </label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileSelect}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p className="mt-1 text-xs text-gray-500">
          Excel 文件應包含以下欄位: 記憶卡類型 , 編號, 備註(非必填), 借用狀態
        </p>
      </div>

      <button
        onClick={handleImport}
        disabled={!file || importing}
        className={`w-full px-4 py-2 rounded font-medium text-white ${
          !file || importing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}>
        {importing ? "匯入中..." : "開始匯入"}
      </button>

      {importStats && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <h3 className="font-semibold mb-2">匯入結果</h3>
          <p>總數: {importStats.total}</p>
          <p className="text-green-600">成功: {importStats.success}</p>
          <p className="text-red-600">失敗: {importStats.failed}</p>

          {importStats.errors.length > 0 && (
            <div className="mt-2">
              <p className="font-semibold">錯誤詳情:</p>
              <ul className="text-xs text-red-600 mt-1 pl-4 list-disc">
                {importStats.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImportExcel;
