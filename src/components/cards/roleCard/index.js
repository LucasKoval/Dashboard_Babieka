import React from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL
} from '../../../apis/baseUrl';
import useFetch from '../../../apis/useFetch';
import Loader from '../../../assets/Loader';
import Title from './assets/Title';
import Value from './assets/Value';

function Card(props) {
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

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <Title title={ props.title } />
                            <Value content={ data.meta.roles.length } />
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-users fa-2x text-gray-300"></i>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;