import React, { useEffect, useState } from 'react';
import calendar from '../svg/calendar.svg';
import axios from 'axios';
import { Table } from 'reactstrap';

const MentorsPay = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [callAPI, setcallAPI] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res)
                setcallAPI(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div className="MentorsPay">
        <div className="dataTable">
            <div className="dataTableHead">
                <div className="titleDate">
                    <p>Mentorlar ishlab topgan pul</p>
                    <div className="date">
                        Sentabr 2020 
                        <img src={calendar} className="calendarIcon ml-3" alt="calendar" />
                    </div>
                </div>
            </div>
            <div className="dataTableBody">
                <Table borderless>
                    <thead>
                        <tr>
                        <th>Mentorlar ismi</th>
                        <th>O'quvchi</th>
                        <th>Kurslar</th>
                        <th>Daromad</th>
                        <th>Berildi</th>
                        <th>Qoldi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callAPI.map(user => (
                            <tr>
                                <th key={user.id} scope="row">{user.name}</th>
                                <td className="text-center">
                                    <b>300 ta</b>
                                    <div className="d-flex">
                                        this month <span className="text-success ml-1">+21</span>
                                    </div>
                                </td>
                                <td>3</td>
                                <td>8,300.000</td>
                                <td className="text-success"><b>5,000.000</b></td>
                                <td className="text-danger"><b>3.000.000</b></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="dataTableFooter mt-5">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>JAMI SUMMA</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>620</th>
                            <th></th>
                            <th></th>
                            <th>8</th>
                            <th></th>
                            <th>14.600.000</th>
                            <th className="text-success">8.600.000</th>
                            <th className="text-danger">3.100.000</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
    </div>
  );
}

export default MentorsPay;