import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import calendar from '../svg/calendar.svg';

const DashboardStat = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="DashboardStat d-flex">
            <div className="box">
                <div className="top d-flex">
                    <p>Umumiy tushum. Barcha tiplar bo'yicha</p>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Real pul turi
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Some Action</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <div className="date">
                        Sentabr 2020
                        <img className="ml-3" src={calendar} alt="calendar" />
                    </div>
                </div>
                <div className="boxFooter d-flex">
                    <div className="buttons">
                        <a href="#">barchasi</a>
                        <a href="#">real pul</a>
                        <a href="#">no real pul</a>
                    </div>
                    <div className="priceInfo">
                        <p className="price">
                            <b>450.000.000</b>
                        </p>
                        <span>in this month <p className="text-success ml-1">+12 000 000</p></span>
                    </div>
                </div>
                <div className="pieCharts">
                    <div className="pieChart">
                        <div className="title">
                            Sotib olganlar
                            <img src={calendar} className="calendarIcon ml-3" />
                        </div>
                        <ul class="chart-skills">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="pieChart mt-5">
                        <div className="title">
                            Sotib olganlar
                            <img src={calendar} className="calendarIcon ml-3" />
                        </div>
                        <ul class="chart-skills">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="pieChart mt-5">
                        <div className="title">
                            Sotib olganlar
                            <img src={calendar} className="calendarIcon ml-3" />
                        </div>
                        <ul class="chart-skills">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStat;