import React from 'react';
import { Link } from 'react-router-dom';

function Tables() {
    return (
        <li className="nav-item">
            <Link to="/users" className="nav-link">
                <i className="fas fa-users"></i>
                <span> Users</span>
            </Link>
        </li>
    );
}

export default Tables;