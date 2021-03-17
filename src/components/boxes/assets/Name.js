import React from "react";

function Name(props) {
    return (
        <p className="m-1 font-weight-bold text-dark">{ props.name }</p>
    );
}

export default Name;