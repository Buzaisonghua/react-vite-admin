import request from '../utils/request';

/** 登录 */
export function Login(data: UsersNamespace.LoginReq) {
  return request<UsersNamespace.UserReq>({
    url: '/users/login',
    method: 'post',
    data,
  });
}

/** 根据token获取用户信息 */
export function getUserInfoToken(token: string) {
  return request<UsersNamespace.UserReq>({
    url: '/users/token',
    method: 'post',
    data: {
      token,
    },
  });
};
