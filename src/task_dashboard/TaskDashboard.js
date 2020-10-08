import React, { Component } from 'react';
import TaskTop from '../task_dashboard/task_items/TaskTop';
import Chat from '../task_dashboard/task_items/Chat';

export default class Taskdashboard extends Component {
    render() {
        return (
            <div className="TaskDashboard">
                <TaskTop />
                <Chat />
            </div>
        )
    }
}
