import React, { useState,useEffect } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    message
  } from 'antd';
  import { PlusCircleOutlined,LoadingOutlined,PlusOutlined } from '@ant-design/icons';
  import dayjs from 'dayjs';
import moment from 'moment';
import Navbar from '../navbar/navbar';
import HRHeader from '../../shared/header/header';
import BreadCrumb from '../../shared/breadCrumb/breadCrumb';
import './editEmployee.css'
import {useNavigate,useLocation} from 'react-router-dom';


const EditEmployee = () => {
  const location = useLocation();
  
  const  key  = location?.state ||{} 
  const navigation = useNavigate();
  
  useEffect(()=>{
    console.log(key)
    if(key){
      setAddress(key?.record?.address)
      setAge(key.record?.age)
      setDesignation(key.record?.designation)
      setGender(key.record?.gender=='Male'?'M':"F")
      setJdate(key.record?.joining_date)
      setMobile(key.record?.mobile)
      setName(key.record?.name)
      
      setImageUrl(key.record?.Image)
      
      

    }

  },[])
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const [loading, setLoading] = useState(false);
const [imageUrl, setImageUrl] = useState();
const [name,setName]=useState('')
const [gender,setGender]=useState(null)
const [mobile,setMobile]=useState('')
const [designation,setDesignation]=useState('')
const [jDate,setJdate]=useState(``)
const [address,setAddress]=useState('')
const [age,setAge]=useState('')

const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    setLoading(true);
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  }
};
const uploadButton = (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>
);
  const { TextArea } = Input;

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
    <Navbar />
    <div className='profile-list-styles'>
        <HRHeader />
        <BreadCrumb />
<h4 className='profileTitle'>Edit Employee</h4>

        <div className="profileContents">
            <div className='formContainer'>
             
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
        gap:'5%'
      }}
    >
           <Form.Item  valuePropName="fileList" getValueFromEvent={normFile} style={{width:'100%',display:"flex",justifyContent:"center"}}>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
              
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    
        </Form.Item>
      <Form.Item >
        <Input placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Item>
      <Form.Item >
        <Input placeholder="Enter designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
      </Form.Item>
      <Form.Item >
        <Input placeholder="Age" type='number' value={age} onChange={(e)=>setAge(e.target.value)} />
      </Form.Item>
      <Form.Item >
      <Select placeholder="Gender" value={gender} onChange={(e)=>setGender(e)} >
            <Select.Option value="M">Male</Select.Option>
            <Select.Option value="F">Female</Select.Option>
            <Select.Option value="O">Others</Select.Option>

          </Select>

      </Form.Item>
      <Form.Item >
        <Input placeholder="Enter mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)} type="number"  />
      </Form.Item>
      <Form.Item >
        <DatePicker format={'YYYY-MM-DD'}  value={location.state &&dayjs(`${jDate}`)}  onChange={(e)=>{setJdate(e.$y+"-"+(e.$M+1)+"-"+(e.$D))}} placeholder='Joining date'/>
        </Form.Item>
       
    
    
      <br />
 
          <Form.Item >
          <Input rows={4} placeholder='Enter State' value={address} maxLength={21} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Item>
      <Form.Item {...buttonItemLayout} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form></div>
    <div className='profileTabs'>
<img  src={imageUrl?imageUrl:'https://source.boringavatars.com/beam/120/Stefan'}>
</img>
<div className='details'>
<h2 style={{visibility:name?'visible':'hidden'}} >{name?name:'XXXXX XXX'}</h2>
<p id="name" style={{visibility:designation?'visible':'hidden'}} >{designation?designation:'XXXXXXX'}</p>
<p style={{visibility:age?'visible':'hidden'}}>{age?age:'XX(X)'}{gender?"("+gender+')':''}</p>
<p style={{visibility:mobile?'visible':'hidden'}}>{mobile?mobile:'XXXXXXXXXX'}</p>

<p style={{visibility:jDate?'visible':'hidden'}}>{jDate?jDate:'XX XXX XXXX'}</p>
<p style={{visibility:address?'visible':'hidden'}}>{address?address:'XXXXXX'}</p>

</div>



    </div>
    
    </div></div>
    </>
  );
};
export default EditEmployee;