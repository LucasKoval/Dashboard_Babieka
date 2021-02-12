import React from 'react';
import propTypes from 'prop-types';
import PageHeading from './pageContent/PageHeading'
import ContentRow1 from './pageContent/ContentRow1'
import ContentRow2 from './pageContent/ContentRow2'

function PageContent() {
    return (
        <div className="container-fluid">
            <PageHeading />
            <ContentRow1 />
            <ContentRow2 />
        </div>
    );
}

export default PageContent;