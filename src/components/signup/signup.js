import '../../App.css';
import React,{useState} from 'react';
import { LockOutlined, UserOutlined,MailOutlined} from '@ant-design/icons';
import { Button, Form, Input,Space ,Radio,Checkbox, message,Result} from 'antd';
import Intro from '../intro/intro';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import monitor from './monitor.png'

const SignUp = (props) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    role:''
})
    const navigate =useNavigate()
  const onFinish = (values) => {
    props.addUsers(values)
  };

const [load,setLoad]=useState(false)
const [success,setSuccess]=useState(false)

  function handleRegister(){
    setSuccess(false)
    console.log(data)
    setLoad(true)
    axios.post('http://localhost:4000/api/user/signup',data).then((res)=>{
        console.log(res.data)
        setLoad(false)
        setSuccess(true)
        // navigate('/login')
    }).catch((err)=>{
        console.log(err)
        setLoad(false)
        setSuccess(false)
    })


  }
  return (

    <>
    <Intro />

   
   
   <div className='signin-div'>
    {!success?(  <><img className='logo-img' src={'https://i.ibb.co/zVdJxKq/methodology-comparison-bro.png'} />
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
            name="Name"
            
            rules={[
            {
                required: true,
                message: 'Please input your first name!',
            },
            ]}
        >
            <Input suffix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Name" 
            size='medium'
            onChange={(e)=>{
                setData({...data,name:e.target.value})
            }}

            
            />
        </Form.Item>
       
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
            size='medium'
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
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password suffix={<MailOutlined />} 
            placeholder="Password" 
            type='password'
            size='medium'
            onChange={(e)=>{
                setData({...data,password:e.target.value})
            }}
            />
        </Form.Item>
      <Form.Item label="Role" 
     labelAlign='center'
     
      name="role"
      rules={[
      {
        required: true,
        message: 'Please select your role!',
      }
      ]}
      >
      <Radio.Group
      defaultValue="User"
      buttonStyle="solid"
      style={{
        marginTop: 16,
        
      }}
      onChange={(e)=>{
        console.log(e.target.value)
        setData({...data,role:e.target.value})
      }}
    >
      <Radio.Button value="Admin">Admin</Radio.Button>

      <Radio.Button value="User">User</Radio.Button>
    </Radio.Group>
    </Form.Item>
        <p className='login-signin-para'>Already a member ? <span className='link-text' onClick={()=>navigate('/login')}>Log in</span></p>
        <Form.Item>
            <Button size='large' type="primary" htmlType="submit" className="login-form-button" onClick={handleRegister} loading={load}>
            Register
            </Button>
        </Form.Item>
        </Form>
        
 </>   ): <><Result
    status="success"
    title="You're All Set ! Account Creation Successful"
    subTitle="Ready to dive into your HR portal? Login now and discover endless possibilities."
    extra={[
      <Button type="primary" key="console" onClick={()=>navigate('/login')}>
        Go to login page
      </Button>,
      <Button key="buy" onClick={()=>{
        setSuccess(false)
      }}>Go back</Button>,
    ]}
  /></>}
    </div>
    </>
  );
};
export default SignUp;

