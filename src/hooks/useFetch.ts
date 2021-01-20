import { useEffect, useState } from 'react';
import { BASE_URL, ItemResponse } from 'services/api';

export function useFetch<T>(url: string): [T | null, boolean] {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        signal: abortController.signal,
      })
      .then((response: Response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });

    return () => {
      setData(null);
      setLoading(false);
      abortController.abort();
    };
  }, [url]);

  return [data, loading];
}

export function useFetchItem<T>(id: number): [T | null, boolean] {
  return useFetch(`${BASE_URL}/item/${id}.json`);
}