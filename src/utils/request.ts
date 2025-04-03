import axios from 'axios';
import { getToken } from './token';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const token = getToken();
    if (token) {
      config.headers['X-Access-Token'] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      // message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000,
      // });
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // MessageBox.confirm(
        //   '你已被登出，可以取消继续留在该页面，或者重新登录',
        //   '确定登出',
        //   {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning',
        //   },
        // ).then(() => {
        //   // UserModule.ResetToken();
        //   location.reload(); // To prevent bugs from vue-router
        // });
      }
      return Promise.reject(new Error(res.message || 'Error'));
    }
    else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
