import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token) {
      config.headers['Authorization'] = `Bear ${token}`;
    }

    if (userId) {
      config.headers['user_id'] = userId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
