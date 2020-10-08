import React, { Component } from 'react';
import user from '../director_dashboard/svg/user.svg';
import notification from '../director_dashboard/svg/notification.svg';

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Profile">
                <div className="main">
                    <div className="profile__name">
                        <p>Mark Zuckerberg</p>
                    </div>
                    <div className="functions">
                        <div className="user">
                            <img src={user} alt="user" />
                        </div>
                        <div className="notification">
                            <img src={notification} alt="notification" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
