import '../../App.css';
import React ,{useState} from 'react';
import Navbar from '../navbar/navbar';
import { ProfileOutlined,PropertySafetyOutlined ,ProjectOutlined,UserAddOutlined,UsergroupAddOutlined,DollarCircleOutlined, CloseOutlined} from '@ant-design/icons';
import './mainContent.css';
import { Progress } from 'antd';

import Tables from '../../shared/table/table';
import { LineChart } from '../../shared/Charts/lineChart';
import { AreaChart } from '../../shared/Charts/areaChart';
import { BarChart } from '../../shared/Charts/barChart';
import { RadarChart } from '../../shared/Charts/radarChart';
import BreadCrumb from '../../shared/breadCrumb/breadCrumb';
import Header from '../../shared/header/header';
import HRHeader from '../../shared/header/header';


const MainContent = (props) => {

        const [data, setData] = useState([
                { id: 1, value: "Conduct interviews for freshers", checked: true },
                { id: 2, value: "Plan employee engagement activities", checked: false },
                { id: 3, value: "Review and manage employee benefits", checked: false },
                { id: 4, value: "Post new job openings on Indeed", checked: false },

              ]);
            
              const [inputValue, setInputValue] = useState('');
            
              const handleCheckboxChange = (index) => {
                setData((prevData) => {
                  const newData = [...prevData];
                  newData[index] = {
                    ...newData[index],
                    checked: !newData[index].checked,
                  };
                  return newData;
                });
              };
            
              const handleDeleteItem = (index) => {
                setData((prevData) => {
                  const newData = [...prevData];
                  newData.splice(index, 1);
                  return newData;
                });
              };
            
              const handleAddItem = () => {
                if(data.length<=7){
                if (inputValue.trim() === '') {
                  return;
                }
            
                setData((prevData) => {
                  const newId = prevData.length > 0 ? prevData[prevData.length - 1].id + 1 : 1;
                  const newItem = { id: newId, value: inputValue, checked: false };
                  return [...prevData, newItem];
                });
        
                setInputValue('');}
              };
            
            
    return (
        <>
            
            <Navbar />
            <div style={{width:'100%'}}>

        <div className='main-container'>
        <HRHeader />

        <BreadCrumb />


        


<div className='count'>

<div className='counts'>
    <div style={{position:'absolute',left:10,width:"70%"}}>
        <p style={{fontSize:'0.7rem',fontFamily:'sans-serif',fontWeight:600 ,color:'white'}}>Earnings</p>
<Progress percent={30} format={(percent) => `${percent} `} size={'small'} trailColor='white'/>
</div>

<DollarCircleOutlined   style={{fontSize:40,opacity:0.2,position:'absolute',right:5}}/>
</div>
<div className='counts' id="two">
<div style={{position:'absolute',left:10,width:"70%"}}>
        <p style={{fontSize:'0.7rem',fontFamily:'sans-serif',fontWeight:600 ,color:'white'}}>Projects</p>
<Progress percent={40} format={(percent) => `${percent} `} size={'small'} trailColor='white'/>
</div>
<ProjectOutlined  rotate={180} style={{fontSize:40,opacity:0.2,position:'absolute',right:5}}/>

</div>

<div className='counts' id="three">
<div style={{position:'absolute',left:10,width:"70%"}}>
        <p style={{fontSize:'0.7rem',fontFamily:'sans-serif',fontWeight:600 ,color:'white'}}>New Employee</p>
<Progress percent={50} format={(percent) => `${percent} `} size={'small'} trailColor='white'/>
</div>
<UsergroupAddOutlined   style={{fontSize:40,opacity:0.2,position:'absolute',right:5}}/>
</div>
<div className='counts' id="four">
<div style={{position:'absolute',left:10,width:"70%"}}>
        <p style={{fontSize:'0.7rem',fontFamily:'sans-serif',fontWeight:600 ,color:'white'}}>Expenses</p>
<Progress percent={60} format={(percent) => `${percent} `} size={'small'} trailColor='white'/>
</div>
<PropertySafetyOutlined style={{fontSize:40,opacity:0.2,position:'absolute',right:5}} />
</div>


</div>



            <div className='sub'>
           <div className='sub-container' >
           <LineChart />
           </div>
           <div className='sub-container' >
           <AreaChart />
           </div></div>
           <div className='table' >
           <div className='table-container' id="tab" >
<Tables />
           </div>
           <div className='table-container' id="todo" >
            <h4>Todo List</h4>
            <div className='items'>
      {data.map((item, index) => (
        <div key={item.id} className='todo-item'>
          <input
          className='checkboxes'
            type='checkbox'
            checked={item.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          <span style={{ textDecoration: item.checked ? "line-through" : "" }}>
            {item.value}
          </span> 
          <span><CloseOutlined  onClick={() => handleDeleteItem(index)} style={{position:'absolute',right:5,color:"#00000061"}} /></span>
        </div>
      ))}
    
    </div>
    <input type='text' className='input' placeholder='Enter todo here ...' maxLength={36} value={inputValue} onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}  onChange={(e) => setInputValue(e.target.value)} />
    

           </div></div>
           <div className='sub'>
           <div className='sub-container' >
<BarChart />
           </div>
           <div className='sub-container' >
<RadarChart />
           </div></div>

          
       

         
           
        </div> </div>
         </>
    )
}

export default MainContent