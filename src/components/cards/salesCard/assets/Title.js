import React from 'react';

function Title(props) {
    return (
        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{ props.title }</div> 
    );
}

export default Title;