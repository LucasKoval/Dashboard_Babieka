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
import Name from "./assets/Name";
import Description from "./assets/Description";
import Image from "./assets/Image";
import Detail from "./assets/Detail";

function LastProductBox(props) {
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
    const lastItem = data.data.products[data.data.products.length - 1]

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <Image image={lastItem.urlImage} />
                    <Name name={lastItem.model.name} />
                    <Description description={lastItem.model.description} />
                    <Detail detail={lastItem.urlDetail} />
                </div>
            </div>
        </div>
    );
}

export default LastProductBox;