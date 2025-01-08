import axios from 'axios';

// 建立 Axios 實例
const instance = axios.create({
    baseURL: 'http://localhost:3002/api', // 確認指向正確的後端 URL 和端口
});

// 在請求攔截器中加入 token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
