import React from 'react';
import propTypes from 'prop-types';
import TbNavbar from './TbNavbar'

function Topbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <TbNavbar />
        </nav>
    );
}

export default Topbar;