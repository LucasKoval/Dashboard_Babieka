import React from "react";

function Image(props) {
    return (
        <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 w-50" styles="width: 25rem" src={ props.image } alt="Imagen del artículo" />
        </div>
    );
}

export default Image;