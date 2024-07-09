// useApi.ts
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Base configuration for Axios
const apiClient = axios.create({
  baseURL: 'https://journal-api-8xkw.onrender.com', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface UseApiReturn<T> {
  response: T | null;
  loading: boolean;
  error: any;
  refetch: () => Promise<void>;
}

const useApi = <T>(
  method: Method,
  url: string,
  data: any = null,
  params: any = {},
  autoFetch: boolean = true
): UseApiReturn<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result: AxiosResponse<T> = await apiClient({
        method,
        url,
        data,
        params,
      });
      setResponse(result.data);
    } catch (err:any) {
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

  return { response, loading, error, refetch: fetchData };
};

export default useApi;
