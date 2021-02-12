import React from 'react';
import propTypes from 'prop-types';
import Topbar from './main/Topbar';
import PageContent from './main/PageContent';

function Main() {
    return (
        <div id="content">
            <Topbar />
            <PageContent />
        </div>
    );
}

export default Main;