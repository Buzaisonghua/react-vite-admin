import { message, Modal } from 'antd';
import axios from 'axios';
import { getToken, removeToken } from './token';

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL + import.meta.env.VITE_API,
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
      if (res.code === 20001) {
        message.error(res.msg || 'Error');
      }

      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        Modal.info({
          title: '确定登出',
          content: '你已被登出，可以取消继续留在该页面，或者重新登录',
          okText: '重新登录',
          onOk() {
            removeToken();
            location.reload();
          },
        });
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
