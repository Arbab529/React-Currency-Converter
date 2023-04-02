import { useState, useEffect } from 'react'
import axios from 'axios'

function useAxios(requestUrl) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(requestUrl);
                setData(response.data);
            } catch (error) {
                setError(error.message);
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [requestUrl]);

    return [data, error, loading]
}

export default useAxios