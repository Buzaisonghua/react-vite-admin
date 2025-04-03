import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import React from 'react';
import './index.less';

interface FieldType {
  username?: string
  password?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  // eslint-disable-next-line no-console
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.error('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <div className="login-container">
    <div className="login-box">
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600, minWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
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

export default Login;
