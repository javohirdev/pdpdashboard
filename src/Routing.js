import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Main from './director_dashboard/Main';
import General from './task_dashboard/General';
import MainChat from './task_chat/MainChat.js';

const Routing = () => {
    return(
        <Router>
            <div className="Routing">
                <Route path="/" exact component={Main} />
                <Route path="/task" component={General} />
                <Route path="/chat" component={MainChat} />
            </div>
        </Router>
    )
}

export default Routing;