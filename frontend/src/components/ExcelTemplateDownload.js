import React from "react";
import * as XLSX from "xlsx";

const ExcelTemplateDownload = () => {
  const downloadTemplate = () => {
    // 創建工作簿
    const wb = XLSX.utils.book_new();

    // 準備模板數據 - 單純的表頭和示例數據
    const templateData = [
      ["記憶卡類型", "編號", "備註", "借用狀態"],
      ["64G", "01", "", "N"]
    ];

    // 創建數據工作表
    const ws = XLSX.utils.aoa_to_sheet(templateData);
    XLSX.utils.book_append_sheet(wb, ws, "記憶卡數據");

    // 設置列寬
    const wscols = [
      { wch: 15 }, // 記憶卡類型
      { wch: 15 }, // 編號
      { wch: 15 }, // 備註
      { wch: 15 } // 借用狀態
    ];
    ws["!cols"] = wscols;

    // 下載檔案
    XLSX.writeFile(wb, "記憶卡匯入模板.xlsx");
  };

  return (
    <div className="mb-4">
      <button
        onClick={downloadTemplate}
        className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        下載匯入模板
      </button>
      <p className="mt-1 text-xs text-gray-500">下載 Excel 模板來了解正確的數據格式</p>
    </div>
  );
};

export default ExcelTemplateDownload;
