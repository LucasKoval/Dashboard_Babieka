import React from 'react';
import propTypes from 'prop-types';
import Alerts from './TbNavbar/Alerts'
import Messages from './TbNavbar/Messages'
import UserInfo from './TbNavbar/UserInfo'

function TbNavbar() {
    return (
        <ul className="navbar-nav ml-auto">
            <Alerts />
            <Messages />
            <div className="topbar-divider d-none d-sm-block"></div>
            <UserInfo />
        </ul>
    );
}

export default TbNavbar;