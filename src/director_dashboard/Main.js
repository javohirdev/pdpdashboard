import React from 'react';
import SideBar from './SideBar';
import Profile from './Profile';
import Dashboard from './Dashboard';
import '../styles/DirectorDashboard.scss';

function Main(){
    return(
        <div className="director__dashboard">
            <SideBar />
            <Profile />
            <Dashboard />
        </div>
    )
}

export default Main;