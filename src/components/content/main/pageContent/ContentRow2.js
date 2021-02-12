import React from 'react';
import propTypes from 'prop-types';
import LastProduct from './contentRow2/LastProduct'
import Categories from './contentRow2/Categories'

function ContentRow2() {
    return (
        <div className="row">
            <LastProduct />
            <Categories />
        </div>
    );
}

export default ContentRow2;