import { useEffect, useState } from 'react';
import { fetchItem, ItemResponse } from '../services/api';

function useFetchItem(id: number) {
  const [item, setItem] = useState<ItemResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const fetch = async () => {
      try {
        const json = await fetchItem(id);
        if (!cancelled) {
          setItem(json);
        }
      } catch (e) {
        console.log('ERROR');
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    fetch();
    return () => {
      setItem(null);
      setLoading(false);
      cancelled = true;
    };
  }, [id]);

  return { item, loading };
}

export default useFetchItem;
