import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // 베이스 url 추후 수정 및 env에 숨기기
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 토큰을 로컬 스토리지에서 가져옴
    const userId = localStorage.getItem('userId'); // 사용자 ID를 로컬 스토리지에서 가져옴

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (userId) {
      config.headers['user_id'] = userId; // 사용자 ID를 요청 헤더에 추가
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
