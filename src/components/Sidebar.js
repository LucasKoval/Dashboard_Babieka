import React from 'react';
import propTypes from 'prop-types';
import Divider from './sidebar/Divider';
import Brand from './sidebar/Brand';
import Dashboard from './sidebar/Dashboard';
import Pages from './sidebar/Pages';
import Charts from './sidebar/Charts';
import Tables from './sidebar/Tables';

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brand />
            <Divider />
            <Dashboard />   {/* Nav-Item */}
            <Divider />
            <div className="sidebar-heading">Actions</div>   {/* Heading */}
            <Pages />   {/* Nav-Item */}
            <Charts />   {/* Nav-Item */}
            <Tables />   {/* Nav-Item */}
            <hr className="sidebar-divider d-none d-md-block"/>   {/* Divider */}
        </ul>
    );
}

export default Sidebar;