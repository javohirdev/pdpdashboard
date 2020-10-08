import React, { Component } from 'react'
import DashboardTop from './dashboard_items/DashboardTop';
import DashboardStat from './dashboard_items/DashboardStat';
import Charts from './dashboard_items/Charts';
import MentorsPay from './dashboard_items/MentorsPay';

export default class Dashboard extends Component {
    
    render() {
        return (
            <div className="Dashboard">
                <DashboardTop />
                <DashboardStat />
                <Charts />
                <MentorsPay />
            </div>
        )
    }
}
