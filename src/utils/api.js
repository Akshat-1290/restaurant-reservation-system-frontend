import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restaurant-reservation-system-backend-qq29.onrender.com/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;