import React from 'react';
import propTypes from 'prop-types';
import Main from './content/Main'
import Footer from './content/Footer'

function Content() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <Main />
            <Footer />
        </div>
    );
}

export default Content;