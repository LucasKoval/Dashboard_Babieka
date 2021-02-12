import React from 'react';
import propTypes from 'prop-types';

function Pages() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" href="/">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
        </li>
    );
}

export default Pages;