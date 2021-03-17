import React, { useState, useEffect } from "react";
/* import { BASE_API_USERS_URL } from '../../../apis/baseUrl';
import { BASE_API_PRODUCTS_URL } from '../../../apis/baseUrl';
import useFetch from '../../../apis/useFetch'
import Loader from '../../../assets/Loader'; */

function Value(props) {
    /* let apiUrl = props.apiUrl;
    if (apiUrl == 'products') {
        apiUrl = BASE_API_PRODUCTS_URL;
    } else if (apiUrl == 'users') {
        apiUrl = BASE_API_USERS_URL;
    } else {
        apiUrl = null;
    } */
    
    /* const { data, loading, error } = useFetch(apiUrl, []);
    if (loading) return <Loader />;
    if (error) return "Error!"; */

    return (
        <div className="h5 mb-0 font-weight-bold text-gray-800">{ props.content }</div>          
    );
}

export default Value;