import '../../App.css';
import React from 'react';
// import user from './user.png'

import { Button, Form, Input } from 'antd';

const Profile = (props) => {
    const db = props.db
    const currentUser = props.currentUser
    const onFinish = (values) => {
        props.updateUsers(values)
    };
    return(
        <div className='profile-container'>
        <div className='avatar-container'>
            <img src={'https://i.ibb.co/zVdJxKq/methodology-comparison-bro.png'}></img>
            <label for="avatar">Choose a profile picture: </label>
            <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg" />

        </div>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={db[currentUser]}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    placeholder="Email"
                    size='large'
                />
            </Form.Item>
            <div className='style-form'>
                <Form.Item
                    className='form-flex-style'
                    name="firstName"
                    rules={[
                        {
                            message: 'Please input your First name!',
                        },
                    ]}
                >
                    <Input
                        placeholder="First name"
                        size='large'
                    />
                </Form.Item>
                <Form.Item
                    className='form-flex-style'
                    name="lastName"
                    rules={[
                        {
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input 
                        placeholder="Last name"
                        size='large'
       
                        initialvalues={'hello'}
                    />
                </Form.Item> 
            </div>
            <div className='style-form'>
                <Form.Item
                    name="password"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Phone Number!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Phone Number"
                    />
                </Form.Item>
            </div>
            <div className='style-form'>
                <Form.Item
                    name="gender"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Gender!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Gender"
                    />
                </Form.Item>
                <Form.Item
                    name="martialStatus"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Martial status!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Martial status"
                    />
                </Form.Item>
            </div>
            <Form.Item
                name="address"
                rules={[
                    {
                        message: 'Please input your Address!',
                    },
                ]}
            >
                <Input
                    placeholder="Address"
                    size='large'
                />
            </Form.Item>
            <div className='style-form'>
                <Form.Item
                    className='form-flex-style'
                    name="desigination"
                    rules={[
                        {
                            message: 'Please input your Desigination!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Desigination"
                        size='large'
                    />
                </Form.Item>
                <Form.Item
                    className='form-flex-style'
                    name="reportsTo"
                    rules={[
                        {
                            message: 'Please input your Manager name!',
                        },
                    ]}
                >
                    <Input 
                        placeholder="Reports to"
                        size='large'
                    />
                </Form.Item> 
            </div>
            <div className='style-form'>
                <Form.Item
                    name="dob"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Date of birth!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="DOB"
                    />
                </Form.Item>
                <Form.Item
                    name="hireDate"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input the Hire date!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Hire date"
                    />
                </Form.Item>
            </div>
            <div className='style-form'>
                <Form.Item
                    name="HighestEducationQualification"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input your Highest educational qualification!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Educational qualification"
                    />
                </Form.Item>
                <Form.Item
                    name="emergencyContact"
                    className='form-flex-style'
                    rules={[
                        {
                            message: 'Please input the Emergency contact number!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Emergency contact"
                    />
                </Form.Item>
            </div>
            <Form.Item>
                <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                    Update
                </Button>
            </Form.Item>
        </Form>
    </div>
    )
}
export default Profile