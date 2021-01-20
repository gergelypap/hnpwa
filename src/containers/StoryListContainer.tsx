import { useCallback, useState } from 'react';
import useSWR from 'swr/esm/use-swr';

import Story from 'components/Item/Story';
import { fetchJson } from 'services/api';

const CHUNK_SIZE: number = 30;

interface Props {
  readonly url: string;
}

const StoryListContainer = ({ url }: Props) => {
  const { data, error } = useSWR(url, fetchJson);
  const [loadedChunks, setLoadedChunks] = useState<number>(1);

  const incrementChunks = useCallback(() => {
    setLoadedChunks(loadedChunks + 1);
  }, [loadedChunks]);

  if (error) {
    return <span>Failed to load data.</span>;
  }
  if (!data) {
    return <span>Fetching stories...</span>;
  }
  return (
    <>
      {data.slice(0, loadedChunks * CHUNK_SIZE).map((id: number) => (
        <Story key={id} id={id} />
      ))}
      <button onClick={incrementChunks}>Load {CHUNK_SIZE} more</button>
    </>
  );
};

export default StoryListContainer;
