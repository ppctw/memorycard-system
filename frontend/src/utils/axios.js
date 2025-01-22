// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
});

// 請求攔截器：附加 token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 響應攔截器：捕捉 401 錯誤
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 收到 401 狀態碼時，移除 token 並導向登入頁面
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
