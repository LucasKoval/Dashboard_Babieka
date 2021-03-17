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
        case 'Casual':
            filter = data.meta.count_Category_Casual;
        break;
        case 'Fiesta':
            filter = data.meta.count_Category_Fiesta;
        break;
        case 'Sale':
            filter = data.meta.count_Category_Sale;
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
                    <span>{props.name}</span>
                    <span>{filter}</span>
                </div>
            </div>
        </div> 
    );
}

export default Block;