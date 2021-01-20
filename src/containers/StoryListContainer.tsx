import { useCallback, useState } from 'react';

import Story from 'components/Item/Story';
import { useFetch } from 'hooks/useFetch';

interface Props {
  readonly url: string;
}

const StoryListContainer = ({ url }: Props) => {
  const [stories, loading] = useFetch<number[]>(url);
  const [loadedChunks, setLoadedChunks] = useState(1);
  const chunkSize = 30;

  const incrementChunks = useCallback(() => {
    setLoadedChunks(loadedChunks + 1);
  }, [loadedChunks]);

  if (loading || !stories) {
    return <span>Loading...</span>;
  }
  return (
    <>
      {stories.slice(0, loadedChunks * chunkSize).map((id) => (
        <Story key={id} id={id} />
      ))}
      <button onClick={incrementChunks}>Load {chunkSize} more</button>
    </>
  );
};

export default StoryListContainer;
