import React , { useState, useEffect } from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL
} from '../../apis/baseUrl';
import Loader from '../../assets/Loader';
import apiCall from '../../apis/apiCall';
import {HorizontalBar} from 'react-chartjs-2';

function ChartUserBox(props) {
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

   
    const [users, setUsers] = useState(null);
    const [items, setItems]=useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [previousPages, setPreviousPages] = useState(null);
    const [nextPages, setNextPages] = useState(null);
    
    const data ={
        labels:users,
        datasets:[{
            label:'Usuarios',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor:'black',
            borderWidth:1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBoderColor: '#FFFF00',
            data:items
        }]
    }

    const getPages =()=>{
        apiCall(apiUrl + "?page=" + page)
        .then(response => {
            setUsers(response.data.data.users)
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


    let auxUsers=[];
    let auxItems=[];

    users.map(user=>{

    })
    
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <ul class="list-group list-group-flush">
                            <HorizontalBar/>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ChartUserBox;