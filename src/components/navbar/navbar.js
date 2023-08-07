import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
  ProjectOutlined,
  MailOutlined,

  PlusOutlined,
  MinusOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import {faker} from '@faker-js/faker';
import {useNavigate} from 'react-router-dom';
import './navbar.css';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [


  


  getItem('Dashboard','1', <HomeOutlined />),

  
  getItem('Employees', 'sub1',  <UsergroupAddOutlined />, [
    getItem('All Employee', '2'),
    getItem('Edit Employee ', '3'),
    getItem('Add Employee ', '4'),
 
  ]),
  getItem('Projects','sub2' ,<ProjectOutlined />,[
    getItem('All Project', '5'),
    getItem('Add Project', '6'),
    getItem('Edit Project', '7'),
  ]),
  getItem('Attendance','sub3' ,<ProjectOutlined />,[
    getItem('Today Attendance', '8'),
    getItem('Employee Attendance', '9'),
    
  ]),
  getItem('Holidays','sub4' ,<ProjectOutlined />,[
    getItem('All Holiday', '10'),
    getItem('Edit Holiday', '11'),
    getItem("Add Holiday", '12'),
    
  ]),
  getItem('Leave Management','sub5' ,<ProjectOutlined />,[
    getItem('All Leave Request', '13'),
    getItem('Leave Balance', '14'),
    getItem("New Leave Request", '15'),
    getItem("Edit Leave Request", '16'),
    getItem("Leave Types", '17'),
    
  ]), 
   getItem('Accounts','sub6' ,<ProjectOutlined />,[
    getItem('Income', '18'),
    getItem('Expenses', '19'),
    
    getItem("Invoices", '20'),
    
  ]),
  getItem('Payroll','sub7' ,<ProjectOutlined />,[
    getItem('Payslips', '21'),
    getItem('Employee Salary', '22'),
    
    
  ]),
  getItem('Job','sub8' ,<ProjectOutlined />,[
    getItem('Add Job', '23'),
    getItem('Requirements', '24'),
    getItem("Applicant List", '25'),
    
  ]),

];
const Navbar = () => {
  const navigation=useNavigate()
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleChange=(e)=>{
    console.log(e.key)
    if(e.key=='1'){
      navigation('home')
    }
    if(e.key=='2'){
      navigation('/employees/all')
    }
    if(e.key=='3'){
      navigation('/employees/edit',{
        state:{record:{
          key: '120',
    name: faker.person.firstName(),
    age: 32,
    designation: faker.person.jobType(),
    mobile: faker.datatype.number({ min: 7000000000, max: 9999999999 }),
    joining_date: '2023-06-03',
    address: 'New York No. 1 Lake Park',
 
    gender: faker.person.sex(),
    Image: 'https://robohash.org/stefan-one'

        }}
      })
    }
    if(e.key=='4'){
      navigation('/employees/add',{
        state:null
      })
    }
    if(e.key=='5'){
      navigation('/projects')
    }

  }
  return (
    <div
      style={{
        height:"100%",
        width:"20%",

      }}
    
 
    
    >
  

 
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        onChange={(e) => handleChange(e)}
        // inlineIndent={50}
        onSelect={(e)=>handleChange(e)}
        inlineCollapsed={false}
        items={items}
        subMenuOpenDelay={4}
    
        className='navbar'
      />
    </div>
  );
};
export default Navbar;