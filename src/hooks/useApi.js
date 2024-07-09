import {useState, useEffect} from 'react';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useApi = (method, url, data = null, params = {}, autoFetch = true) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiClient({
        method,
        url,
        data,
        params,
      });
      setResponse(result.data);
    } catch (err) {
      setError(err.response ? err.response.data : new Error('Network error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [method, url, data, params, autoFetch]);

  return {response, loading, error, refetch: fetchData};
};

export default useApi;
