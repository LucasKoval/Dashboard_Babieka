import React , { useState, useEffect } from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL,
    BASE_API_MODELS_LIST_URL
} from '../../apis/baseUrl';
import Loader from '../../assets/Loader';
import apiCall from '../../apis/apiCall';

function ListModelBox(props) {
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
        
        case undefined:
            apiUrl = undefined;
        break;
        default:
            apiUrl = BASE_API_PRODUCTS_URL;
        break;
    }

   
    const [models, setModels] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [previousPages, setPreviousPages] = useState(null);
    const [nextPages, setNextPages] = useState(null);
    
    const getPages =()=>{
        apiCall(apiUrl + "?page=" + page)
        .then(response => {
            setModels(response.data.data.products)
            setPreviousPages(response.data.meta.previousPage)
            setNextPages(response.data.meta.nextPage)

        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }

    useEffect(() => {
        getPages();
    }, []);

    useEffect(() => {
        getPages();
    }, [page, previousPages, nextPages]);


    if (loading) return <Loader />;
    if (error) return "Error!";
    
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <ul class="list-group list-group-flush">
                            {
                                models && 
                                models.map((model) =>{
                                    return <li class="list-group-item"><img className="img-profile rounded-circle mr-2" src={model.urlImage} width="60" />{model.model.name+' '+model.model.color.name}</li>
                                })
                            }
                            <div aria-label="Page navigation example">
                                <ul class="pagination d-flex justify-content-center align-items-end">
                                    <li class="page-item"><button class="page-link" onClick={()=>{previousPages && setPage(page - 1 )}}>Previous</button></li>
                                    <li class="page-item"><button class="page-link">{page}</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>{nextPages && setPage(page + 1 )}}>Next</button></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ListModelBox;