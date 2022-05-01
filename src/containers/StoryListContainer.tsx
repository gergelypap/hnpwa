import { useCallback, useState } from 'react';
import Story from 'components/Item/Story';
import useSWR from 'swr';
import { fetcher } from 'utils';

interface Props {
  readonly url: string;
}

const StoryListContainer = ({ url }: Props) => {
  const { data: stories } = useSWR(url, fetcher);
  const [loadedChunks, setLoadedChunks] = useState(1);
  const chunkSize = 30;

  const incrementChunks = useCallback(() => {
    setLoadedChunks(loadedChunks + 1);
  }, [loadedChunks]);

  if (!stories) {
    return <span>Loading...</span>;
  }
  return (
    <>
      {stories.slice(0, loadedChunks * chunkSize).map((id: number) => (
        <Story key={id} id={id} />
      ))}
      <button onClick={incrementChunks}>Load {chunkSize} more</button>
    </>
  );
};

export default StoryListContainer;
