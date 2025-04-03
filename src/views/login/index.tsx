import type { FormProps } from 'antd';
import { Login } from '@/api';
import { setToken } from '@/utils/token';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.less';

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<UsersNamespace.LoginReq>['onFinish'] = async (values) => {
    const { data } = await Login(values);
    dispatch({
      type: 'user/setUserState',
      payload: {
        ...data,
      },
    });
    setToken(data.token);
    navigate('/dashboard');
  };

  const onFinishFailed: FormProps<UsersNamespace.LoginReq>['onFinishFailed'] = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  const loginForm = {
    username: 'admin',
    password: '123456',
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600, minWidth: 500 }}
          initialValues={loginForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item<UsersNamespace.LoginReq>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<UsersNamespace.LoginReq>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', margin: 0 }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}

export default LoginComponent;
