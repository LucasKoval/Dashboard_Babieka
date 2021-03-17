import React from 'react';

function UserInfo() {
    return (
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Lucas Koval</span>
                <img className="img-profile rounded-circle" src="/avatar.jpg" width="60" />
            </a>
        </li>
    );
}

export default UserInfo;