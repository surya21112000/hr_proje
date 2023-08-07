import '../../App.css';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const Login = (props) => {
  const onFinish = (values) => {
    props.checkLoginCredentails(values)
  };
  return (
    <div className='login-div'>
        <img className='logo-img' src={'https://i.ibb.co/zVdJxKq/methodology-comparison-bro.png'} />
        <div className='login-welcome'>
            <h1 className='login-welcome-heading'>Hello Again!</h1>

        </div>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your Username!',
            },
            ]}
        >
            <Input 
            suffix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Email" 
            type='email'
            size='large'
            />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}
        >
            <Input
            suffix={<LockOutlined className="site-form-item-icon" />}
            size='large'
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Forgot password
            </a>
        </Form.Item>

        <Form.Item>
            <Button size='large' type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
        </Form.Item>
        <p className='login-signin-para'>Or <span className='link-text' onClick={props.switchLoginSignin}>register now!</span></p>
        {props.loginErrorMessage!=='' && <div className='error-msg-login'>{props.loginErrorMessage}</div>}
        </Form>
    </div>
  );
};
export default Login;