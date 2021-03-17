import React from 'react';
import Divider from './assets/Divider';
import Brand from './assets/Brand';
import Dashboard from './assets/Dashboard';
import Main from './assets/Main';
import Products from './assets/Products';
import Users from './assets/Users';

function Sidebar() {
    return (
        
        <ul className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brand />
            <Divider />
            <Dashboard />
            <Divider />
            {/* <div className="sidebar-heading">Actions</div> */}   {/* Heading */}
            <Main />
            <Products />
            <Users />
            <hr className="sidebar-divider d-none d-md-block"/>   {/* Divider */}
        </ul>
    );
}

export default Sidebar;