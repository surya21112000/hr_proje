import '../../App.css';
import React from 'react';

import Navbar from '../navbar/navbar';
import MainContent from '../mainContent/mainContent'
import Header from '../../shared/header/header';

const Home = (props) => {
    const currentUser = props.currentUser;
    const db = props.db;
    const firstName = db[currentUser]['firstName']
    const [navItem,updateNavItem] = React.useState('')

    function changeSelectedNav(navSelected){
        updateNavItem(navSelected)
    }
    return (<>
        <div className='home-container'>
        <Header />

            <Navbar name={firstName} changeSelectedNav={changeSelectedNav}/>
            <MainContent  db={db} currentUser={currentUser} updateUsers={props.updateUsers} selectedNav ={navItem} logout={props.logout}/>
        </div></>
    )
}

export default Home