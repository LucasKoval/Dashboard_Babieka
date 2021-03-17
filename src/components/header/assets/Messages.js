import React from 'react';

function Messages() {
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">4</span>
            </a>
        </li>
    );
}

export default Messages;