import React, { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const QrCodeGeneratorPage = () => {
  const [userData, setUserData] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const [message, setMessage] = useState("");
  const qrRef = useRef(null);

  // 從token獲取用戶資訊
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const user = JSON.parse(jsonPayload).user;

        setUserData(user);
        // 設置QR code值為用戶用戶名稱
        if (user && user.nickname) {
          setQrValue(user.nickname);
        }
      } catch (err) {
        console.error("Token 解碼失敗", err);
        setMessage("無法獲取用戶資訊");
      }
    } else {
      setMessage("請先登入");
    }
  }, []);

  // 下載QR code圖片
  const downloadQRCode = () => {
    if (!qrRef.current) return;

    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `qrcode-${userData?.nickname || "user"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setMessage("QR Code圖片已下載");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">個人QR Code</h1>

        {userData ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* QR Code */}
            <div
              ref={qrRef}
              className="mb-6 p-4 bg-white rounded-lg flex justify-center">
              <QRCodeCanvas
                value={qrValue}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={true}
              />
            </div>

            {/* 用戶資訊 */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">用戶資訊</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">用戶名稱:</span> {userData.nickname}
                </p>
              </div>
            </div>

            {/* 下載按鈕 */}
            <button
              onClick={downloadQRCode}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={20} />
              下載QR Code圖片
            </button>

            {/* 訊息提示 */}
            {message && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                {message}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-xl text-gray-700">{message || "載入中..."}</p>
            {message === "請先登入" && (
              <button
                onClick={() => (window.location.href = "/login")}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                前往登入
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGeneratorPage;
