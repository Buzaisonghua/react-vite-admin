// user.js代码

import { Random } from 'mockjs'; // 导出随机函数

function login(req) {
  // req是一个请求对象，包含: url，type和body属性
  const body = JSON.parse(req.body);
  let code = 20000;
  let msg = '登录成功';
  let data = {
    username: Random.cname(),
    token: Random.guid(),
    message: 'Login successfully.',
  };

  if (body.username !== 'admin' || body.password !== '123456') {
    code = 20001;
    msg = '账号或密码错误';
    data = {};
  }

  data.id = Random.guid();
  data.avatar = Random.image('100x100');
  data.role = Random.integer(1, 3);

  return {
    code,
    data,
    msg,
  };
}

function token(req) {
  const body = JSON.parse(req.body);
  if (body.token === '1') {
    return {
      code: 50008,
      msg: '过期',
      data: {},
    };
  }
  return {
    code: 20000,
    data: {
      req,
      username: Random.cname(),
      token: Random.guid(),
      message: 'success',
      id: Random.guid(),
      avatar: Random.image('100x100'),
      role: Random.integer(1, 3),
    },
    msg: 'success',
  };
}

function logout() {
  return {
    code: 200,
    data: {
      message: 'Logout successfully.',
    },
  };
}

export default {
  login,
  logout,
  token,
};
