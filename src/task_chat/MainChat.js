import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import angry from '../task_chat/assets/angry.svg';
import redLine from '../task_chat/assets/redLine.svg';
import yellowSmile from '../task_chat/assets/yellowSmile.svg';
import yellowLine from '../task_chat/assets/yellowLine.svg';
import greenLine from '../task_chat/assets/greenLine.svg';
import greenSmile from '../task_chat/assets/greenSmile.svg';
import download from '../task_chat/assets/download.svg';
import '../styles/TaskChat.scss';

export default class Mainchat extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="MainChat">
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="levelLesson mt-5">
                                <p>O'quvchilar reytingi <span className="ml-5">14%</span></p>
                                <img src={angry} alt="smile" className="angrySmile" />
                                <img src={redLine} className="redLine" />
                            </div>
                            <div className="levelLesson mt-5">
                                <p>O'quvchilar reytingi <span className="ml-5">25%</span></p>
                                <img src={yellowSmile} alt="smile" className="yellowSmile" />
                                <img src={yellowLine} className="yellowLine" />
                            </div>
                            <div className="levelLesson mt-5">
                                <p>O'quvchilar reytingi <span className="ml-5">80%</span></p>
                                <img src={greenSmile} alt="smile" className="greenSmile" />
                                <img src={greenLine} className="greenLine" />
                            </div>
                            <div className="levelLesson mt-5">
                                <p>O'quvchilar reytingi <span className="ml-5">99%</span></p>
                                <img src={greenSmile} alt="smile" className="greenSmile" />
                                <img src={greenLine} className="greenLine" />
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">13.08.2020 | 13:50</p>
                            </div>
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">13.08.2020 | 13:50</p>
                            </div>
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">13.08.2020 | 13:50</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">Mentor 13.08.2020 | 13:50</p>
                            </div>
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">Mentor 13.08.2020 | 13:50</p>
                            </div>
                            <div className="messages mt-5">
                                <div className="file d-flex">
                                        <div className="icon">
                                            <img src={download} className="download" alt="download" />
                                        </div>
                                        <div className="fileData">
                                            3-Topshiriq
                                            <span>2.3MB</span>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                </div>
                                <p className="d-flex flex-row-reverse">Mentor 13.08.2020 | 13:50</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}