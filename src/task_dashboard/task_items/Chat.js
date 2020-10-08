import React, { Component } from 'react';
import search from '../svgs/filter.svg';
import filter from '../svgs/search.svg';
import star from '../svgs/star.svg';
import next from '../svgs/next.svg';
import smile from '../svgs/smile.svg';
import level from '../svgs/reyting.svg';
import download from '../svgs/download.svg';
import skripka from '../svgs/skripka.svg';
import send from '../svgs/send.svg';
import profilePhoto from '../svgs/profilePhoto.svg';
import task from '../svgs/task.svg';
import info from '../svgs/info.svg';
import calendar from '../svgs/calendar.svg';
import stars from '../svgs/stars.svg';
import correct from '../svgs/correct.svg';
import caution from '../svgs/caution.svg';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userItem: []
        }
    }

    componentWillMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res)
                this.setState({
                    userItem: res.data
                })
            })
    }

    render() {
        return (
            <div className="Chat">
                <div className="chatTop">
                    <div className="chatType">
                        <p>Vazifalar</p>
                        <div className="messages">
                            5
                        </div>
                    </div>
                    <div className="chatType">
                        <p>Chat</p>
                        <div className="messages">
                            5
                        </div>
                    </div>
                </div>
                <div className="searchSection">
                    <img src={filter} alt="filter" />
                    <input type="text" className="form-control" placeholder="Search" />
                    <img src={search} alt="search" />
                </div>
                <div className="mainChat d-flex">
                    <div className="chats">
                        {this.state.userItem.map(user => (
                            <div className="chatsInfo d-flex justify-content-between">
                                <div className="profilePhoto">
                                    MZ
                                </div>
                                <div className="profileName">
                                    <p className="name">{user.name}</p>
                                    <p className="messageText">Lorem ipsum dolor</p>
                                </div>
                                <div className="time d-inline-block">
                                    11:25
                                    <div className="count">1</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chatBox">
                        <div className="boxTop">
                            <div className="starSection">
                                <span>1</span>
                                <div className="level">
                                    <img src={star} alt="start" />
                                    1 QIYIN
                                </div>
                            </div>
                            <div className="starSection active">
                                <span>2</span>
                                <div className="level">
                                    <img src={star} alt="start" />
                                    2 OSON
                                </div>
                            </div>
                            <div className="starSection">
                                <span>3</span>
                                <div className="level">
                                    <img src={star} alt="start" />
                                    3 QIYIN
                                </div>
                            </div>
                            <div className="starSection">
                                <span>1</span>
                                <div className="level">
                                    <img src={star} alt="start" />
                                    4 QIYIN
                                </div>
                            </div>
                            <div className="starSection">
                                <span>5</span>
                                <div className="level">
                                    <img src={star} alt="start" />
                                    5 QIYIN
                                </div>
                            </div>
                            <div className="next ml-4">
                                <img src={next} alt="previous" />
                                <div id="line"></div>
                                <img src={next} alt="next" />
                            </div>
                        </div>
                        <div className="animationInfo d-flex">
                            <p className="title">Murrakkab animatsiya yasash</p>
                            <div className="levelLesson">
                                <p>O'quvchilar reytingi <span className="ml-5">53%</span></p>
                                <img src={smile} alt="smile" className="smile" />
                                <img src={level} alt="smile" className="level" />
                            </div>
                        </div>
                        <div className="messages w-75">
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
                        <div className="messages w-75">
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
                        <div className="searchSec d-flex ml-3">
                            <button id="buttonSkrepka">
                                <img src={skripka} className="skrepka" alt="skrepka" />
                            </button>
                            <input type="text" className="form-control ml-3 mr-3 w-75 border-0" placeholder="Nimadir yozing.." />
                            <button id="buttonSend">
                                <img src={send} className="send" alt="send" />
                            </button>
                        </div>
                    </div>
                    <div className="profile">
                       <div className="top">
                            <img src={profilePhoto} />
                            <p className="ml-5">Mark Zuckerberg</p>
                            <div className="functions d-flex">
                                <span>
                                    <img src={task} className="task ml-3 mb-2" />
                                    <Link to="/chat">Chatga o'tish</Link>
                                </span>
                                <span>
                                    <img src={info} className="task ml-3 mb-2" />
                                    Kurs info
                                </span>
                                <span>
                                    <img src={calendar} className="task ml-3 mb-2" />
                                    Task history 
                                </span>
                            </div>
                       </div>
                       <div className="stars ml-3">
                           <img src={stars} />
                       </div>
                       <div className="twoButtons d-flex">
                           <div>
                               <img src={correct} />
                           </div>
                           <div>
                               <img src={caution} />
                           </div>
                       </div>
                       <div className="homework mt-5">
                           <p>2.Fill yordamida berilgan animatsiyani yarating</p>
                           <div id="texts">
                                Kiritilgan stringning berilgan indexdan boshlab 
                                qolgan qismini chop qiluvchi dastur yozing. 
                                Masalan: String: android,index=2 Natija: “droid”;
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
