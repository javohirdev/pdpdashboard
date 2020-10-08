import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import calendar from '../svg/calendar.svg';

export default class Dashboardtop extends Component {

    render() {
        return (
            <div className="DashboardTop">
                <h3>direktor dashboard</h3>
                <Container className="d-flex">
                        <Col md="4">
                            <div className="infoCard">
                                <div className="cardHeader d-flex">
                                    <p>Ro'yhatdan o'tganlar talabalar soni</p>
                                    <img src={calendar} className="calendar" alt="calendar" />
                                </div>
                                <div className="cardBody mt-3 d-flex">
                                    <h4>620</h4>
                                    <p><span className="text-success mr-1">+5ta</span> <br />
                                        in this month
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="infoCard">
                                <div className="cardHeader d-flex">
                                    <p>Aktiv talabalar soni</p>
                                    <img src={calendar} className="calendar" alt="calendar" />
                                </div>
                                <div className="cardBody mt-3 d-flex">
                                    <h4 className="text-success">120</h4>
                                    <p><span className="text-success mr-1">+34ta</span> <br />
                                        in this month
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="infoCard">
                                <div className="cardHeader d-flex">
                                    <p>Bitirgan talabalar soni</p>
                                    <img src={calendar} className="calendar" alt="calendar" />
                                </div>
                                <div className="cardBody mt-3 d-flex">
                                    <h4 className="text-warning">120</h4>
                                    <p><span className="text-success mr-1 text-warning">+34ta</span> <br />
                                        in this month
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="infoCard">
                                <div className="cardHeader d-flex">
                                    <p>To'xtab qolgan talabalar soni</p>
                                    <img src={calendar} className="calendar" alt="calendar" />
                                </div>
                                <div className="cardBody mt-3 d-flex">
                                    <h4 className="text-danger">620</h4>
                                    <p><span className="text-danger mr-1">+5ta</span> <br />
                                        in this month
                                    </p>
                                </div>
                            </div>
                        </Col>
                </Container>   
            </div>
        )
    }
}
