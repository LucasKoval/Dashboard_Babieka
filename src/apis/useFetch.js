import { useState, useEffect } from 'react';
import apiCall from './apiCall';

function useFetch(BASE_API_URL, defaultValue) {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        apiCall(BASE_API_URL)
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.error("Error fetching api data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
          })
    }, []);

    return { data, loading, error };
}

export default useFetch;