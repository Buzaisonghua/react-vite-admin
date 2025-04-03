/**
 * 定义本地测试接口，最好与正式接口一致，尽可能减少联调阶段修改的工作量
 */
// 引入mockjs
import Mock from 'mockjs';
// 引入模板函数类
import user from './modules/user';

const { mock } = Mock; // Mock函数

// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
mock('/api/users/login', 'post', user.login);
mock('/api/users/logout', 'post', user.logout);
mock('/api/users/token', 'post', user.token);
