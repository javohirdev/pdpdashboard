import React from "react";
import Sidebar from "react-sidebar";
import logo from '../director_dashboard/svg/pdpuz-logo.svg';
import statistics from '../director_dashboard/svg/statistics.svg';
import settings from '../director_dashboard/svg/settings.svg';
import path from '../director_dashboard/svg/path.svg';
import exit from '../director_dashboard/svg/exit.svg';
import close from '../director_dashboard/svg/close.jpg';
import hamburger from '../director_dashboard/svg/hamburger.png';
import task from '../director_dashboard/svg/task.svg';
import { Link } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
          <div className="SidebarContent">
            <img className="logo" src={logo} alt="Logo" />
            <div className="closeSec d-none">
              <img src={close} className="w-50" alt="close" onClick={() => this.onSetSidebarOpen(false)} />
            </div>
            <ul className="links">
              <li className="d-flex">
                <img src={statistics} alt="statistics" />
                <Link to="/">Dashboard</Link>
              </li>
              <li className="d-flex">
                <img src={task} alt="task" />
                <Link to="/task">Vazifalar</Link>
              </li>
              <li className="d-flex">
                <img src={settings} alt="settings" />
                <a href="#">Sozlanmalar</a>
              </li>
            </ul>
            <ul className="links">
              <li className="d-flex">
                <img src={path} alt="path" />
                <a href="#">Home pdp.uz</a>
              </li>
              <li className="d-flex">
                <img src={exit} alt="exit" />
                <a href="#">Sozlanmalar</a>
              </li>
            </ul>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", position: "fixed", width: "20%" } }}
      >
        <img src={hamburger} onClick={() => this.onSetSidebarOpen(true)} style={{width: "15%", display: "none"}} alt="hamburger" />
      </Sidebar>
    );
  }
}
 
export default SideBar;