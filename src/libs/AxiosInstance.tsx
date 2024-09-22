import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
    const token = localStorage.getItem('access_token'); // 토큰을 로컬 스토리지에서 가져옴
    // console.log(token);
=======
    const token = localStorage.getItem('access_token');

>>>>>>> 0aa26fdaa6e7a889b317ec727cd6959ac371c6c0
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
