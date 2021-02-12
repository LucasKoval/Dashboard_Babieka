import React from 'react';
import propTypes from 'prop-types';

function UserInfo() {
    return (
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                <img className="img-profile rounded-circle" src="/dummy-avatar.jpg" width="60" />
            </a>
        </li>
    );
}

export default UserInfo;