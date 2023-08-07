import '../../App.css';
import React, { useState } from 'react';
import { LockOutlined, UserOutlined,MailOutlined} from '@ant-design/icons';
import { Button, Form, Input,Checkbox } from 'antd';
import Intro from '../intro/intro';
// import monitor from './monitor.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signin = (props) => {
    const navigate=useNavigate()
const [data,setData]=useState({
    email:'',
    password:''
})

function handleSignin(){
    axios.post('http://localhost:4000/api/user/signin',data).then((res)=>{
        console.log(res.data)
        navigate('/home')
    }).catch((err)=>{
        console.log(err)
    })
}
  const onFinish = (values) => {
    props.addUsers(values)
  };


  return (


    <>
    <Intro />
    <div className='signin-div'>
        

        <img className='logo-img' src={'https://i.ibb.co/zVdJxKq/methodology-comparison-bro.png'} />
        <div className='signin-welcome'>
            <h1 className='singin-welcome-heading'>Hello There!</h1>
     
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
                message: 'Please input your email!',
            },
            ]}
        >
            <Input suffix={<MailOutlined />} 
            placeholder="Email" 
            type='email'
            size='large'
            onChange={(e)=>{
                setData({...data,email:e.target.value})
            }}
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
            onChange={(e)=>{
                setData({...data,password:e.target.value})
            }}
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

      
        </Form.Item>
        <p className='login-signin-para'>New user ?<span className='link-text' onClick={()=>{
            navigate('/register')
        }}> Sign up</span></p>
        <Form.Item>
            <Button size='large' type="primary" htmlType="submit" className="login-form-button" onClick={handleSignin}>
            Sign in
            </Button>
        </Form.Item>
        </Form>
    </div>
</>
  );
};
export default Signin;

