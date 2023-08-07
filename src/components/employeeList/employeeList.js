import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import HRTable from '../../shared/table/advanceTable';
import Search from 'antd/es/transfer/search';
import SearchTable from '../../shared/table/searchTable';
import Navbar from '../navbar/navbar';
import BreadCrumb from '../../shared/breadCrumb/breadCrumb';
import HRHeader from '../../shared/header/header';
import './employeeList.css'
const EmployeeList = (props) => {

 

    return (
        <>
        <Navbar />
        <div className='profile-list-style'>
            
            <HRHeader />

        <BreadCrumb />

<div className='profileContent'><h4>All Employees</h4> 

<SearchTable /></div>
           
        </div></>
    )
} 


export default EmployeeList
