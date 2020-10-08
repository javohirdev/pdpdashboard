import React, { Component } from 'react';
import '../styles/TaskDashboard.scss';
import SideBar from '../director_dashboard/SideBar';
import Profile from '../director_dashboard/Profile';
import TaskDashboard from '../task_dashboard/TaskDashboard';

export default class General extends Component {
    render() {
        return (
            <div className="General">
                <SideBar />
                <Profile />
                <TaskDashboard />
            </div>
        )
    }
}
