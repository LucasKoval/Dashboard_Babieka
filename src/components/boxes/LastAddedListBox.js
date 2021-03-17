import React , { useState, useEffect } from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL,
    BASE_API_MODELS_LIST_URL,
    BASE_API_LAST_ADDED_URL
} from '../../apis/baseUrl';
import Loader from '../../assets/Loader';
import apiCall from '../../apis/apiCall';
import useFetch from '../../apis/useFetch';

function LastAddedList(props) {
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
        case 'modelsList':
           apiUrl = BASE_API_MODELS_LIST_URL;
        break;
        case 'lastAdded':
           apiUrl = BASE_API_LAST_ADDED_URL;
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
    const lastAdded = data.data.products
   
    return (
        <div className="col-lg-6 mb-4 ">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <ul class="list-group list-group-flush">
                            {
                                lastAdded.map((product) =>{
                                    console.log(lastAdded)
                                    return <li class="list-group-item"><img className="img-profile rounded-circle mr-2" src={product.urlImage} width="60" />{product.name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default LastAddedList;