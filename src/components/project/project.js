import React from 'react'
import ProjectTable from '../../shared/table/projectTable'
import Navbar from '../navbar/navbar';
import BreadCrumb from '../../shared/breadCrumb/breadCrumb';
import HRHeader from '../../shared/header/header';
import './project.css'

export default function Project() {
    return (
        <>
        <Navbar />
        <div className='profile-list-style'>
            
            <HRHeader />

        <BreadCrumb />

<div className='profileContento'><h4>All Projects</h4> 

<ProjectTable /></div>
           
        </div></>
    )
}
