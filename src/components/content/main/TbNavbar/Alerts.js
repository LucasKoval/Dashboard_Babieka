import React from 'react';
import propTypes from 'prop-types';

function Alerts() {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">3+</span>
            </a>
        </li>
    );
}

export default Alerts;