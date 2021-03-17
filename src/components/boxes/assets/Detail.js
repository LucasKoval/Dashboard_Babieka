import React from "react";

function Detail(props) {
    return (
        <a target="_blank" rel="nofollow" className="m-1 text-dark" href={ props.detail }><i className="fas fa-clipboard-list"></i> Detalles</a>        
    );
}

export default Detail;