import React from 'react';
import Alerts from './assets/Alerts'
import Messages from './assets/Messages'
import UserInfo from './assets/UserInfo'

function Header() {
    return (
        <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <ul className="navbar-nav ml-auto">
                    <Alerts />
                    <Messages />
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <UserInfo />
                </ul>
            </nav>
        </div>
    );
}

export default Header;