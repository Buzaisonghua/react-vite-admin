import Cookie from 'js-cookie';

// 获取token
export function getToken() {
  return Cookie.get('token');
}

// 设置token
export function setToken(token: string) {
  Cookie.set('token', token);
}

// 删除token
export function removeToken() {
  Cookie.remove('token');
}
