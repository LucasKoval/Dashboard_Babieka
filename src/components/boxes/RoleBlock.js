import React from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL
} from '../../apis/baseUrl';
import useFetch from '../../apis/useFetch';
import Loader from '../../assets/Loader';

function Block(props) {
    let apiUrl = props.apiUrl;
    switch(apiUrl) {
        case 'users':
            apiUrl = BASE_API_USERS_URL;
        break;
        case 'usersList':
            apiUrl = BASE_API_USERS_LIST_URL;
        break;
        case 'products':
            apiUrl = BASE_API_PRODUCTS_URL;
        break;
        case 'productsList':
            apiUrl = BASE_API_PRODUCTS_LIST_URL;
        break;
        case 'models':
           apiUrl = BASE_API_MODELS_URL;
        break;
        case undefined:
            apiUrl = undefined;
        break;
        default:
            apiUrl = BASE_API_PRODUCTS_URL;
        break;
    }

    const { data, loading, error } = useFetch(apiUrl, []);
    if (loading) return <Loader />;
    if (error) return "Error!";

    let filter = props.name;
    switch(filter) {
        case 'manager':
            filter = data.meta.roles[0];
        break;
        case 'admin':
            filter = data.meta.roles[1];
        break;
        case 'developer':
            filter = data.meta.roles[2];
        break;
        case 'tester':
            filter = data.meta.roles[3];
        break;
        case 'client':
            filter = data.meta.roles[4];
        break;
        case undefined:
            filter = undefined;
        break;
        default:
            filter = undefined;
        break;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="justify-content-space-between card bg-danger text-white shadow">
                <div className="card-body d-flex justify-content-between">
                    <span>{filter}</span>
                </div>
            </div>
        </div> 
    );
}

export default Block;