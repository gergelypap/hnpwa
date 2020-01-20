import { useEffect, useState } from 'react';
import { fetchItem } from '../services/api';

function useFetchItem(id: number) {
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchItem(id).then(response => {
      if (!cancelled) {
        setItem(response);
        setLoading(false);
      }
    });
    return () => {
      setItem(null);
      setLoading(false);
      cancelled = true;
    };
  }, [id]);

  return [item, loading];
}

export default useFetchItem;
