import React, { useLayoutEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrBorrowFlow = ({ onComplete, onClose }) => {
  const [step, setStep] = useState("scanName");
  const [borrowerName, setBorrowerName] = useState("");
  const scannerRef = useRef(null);

  const startScanner = (elementId, onScan) => {
    // 確保元素存在
    const target = document.getElementById(elementId);
    if (!target) {
      console.error(`找不到掃描器容器元素: ${elementId}`);
      return;
    }

    const scanner = new Html5QrcodeScanner(elementId, {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    });

    scanner.render(
      (text) => {
        if (text) onScan(text);
      },
      (err) => {
        // 降低 log 等級避免洗版
        // console.warn("掃描錯誤", err);
      }
    );

    scannerRef.current = scanner;
  };

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      if (step === "scanName") {
        startScanner("qr-reader-name", async (text) => {
          await scannerRef.current.clear();
          setBorrowerName(text);
          setStep("scanCard");
        });
      } else if (step === "scanCard") {
        startScanner("qr-reader-card", async (text) => {
          await scannerRef.current.clear();
          onComplete({ borrowerName, cardId: text });
        });
      }
    }, 500); // 多給一點延遲時間避免初始化太早

    return () => {
      clearTimeout(timeout);
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) => console.error("清除掃描器失敗", err));
      }
    };
  }, [step]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">
          {step === "scanName" ? "請掃描借用人姓名" : "請掃描記憶卡編號"}
        </h2>

        {step === "scanName" && (
          <div
            id="qr-reader-name"
            style={{ width: 250, height: 250, margin: "0 auto" }}
          />
        )}
        {step === "scanCard" && (
          <div
            id="qr-reader-card"
            style={{ width: 250, height: 250, margin: "0 auto" }}
          />
        )}

        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => {
            scannerRef.current?.clear().then(onClose);
          }}>
          取消
        </button>
      </div>
    </div>
  );
};

export default QrBorrowFlow;
