import React from 'react';

function Loader() {
    return (
        <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default Loader;

