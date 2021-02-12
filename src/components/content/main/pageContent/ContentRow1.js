import React from 'react';
import propTypes from 'prop-types';
import AmountProducts from './contentRow1/AmountProducts'
import SummatoryPrice from './contentRow1/SummatoryPrice'
import AmountUsers from './contentRow1/AmountUsers'

function ContentRow1() {
    return (
        <div className="row">
            <AmountProducts />
            <SummatoryPrice />
            <AmountUsers />
        </div>
    );
}

export default ContentRow1;