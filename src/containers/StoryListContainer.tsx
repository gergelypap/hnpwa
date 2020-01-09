import React, { Fragment, useEffect, useState } from 'react';
import StoryListItem from '../components/Item/StoryListItem';
import { fetchJson } from '../services/api';

const CHUNK_SIZE: number = 30;

interface Props {
  readonly url: string;
}

const StoryListContainer: React.FunctionComponent<Props> = ({ url }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [stories, setStories] = useState<number[]>([]);
  const [loadedChunks, setLoadedChunks] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetchJson(url).then((data: number[]) => {
      setStories(data);
      setLoadedChunks(prev => prev + 1);
      setLoading(false);
    });
    return () => {
      setStories([]);
      setLoadedChunks(0);
      setLoading(false);
    };
  }, [url]);

  const handleLoadMore = () => {
    setLoadedChunks(prev => prev + 1);
  };

  if (loading) {
    return <span>Fetching stories...</span>;
  }
  return (
    <Fragment>
      <ol>
        {stories.slice(0, loadedChunks * CHUNK_SIZE).map(id => (
          <StoryListItem key={id} id={id} />
        ))}
      </ol>
      <button onClick={handleLoadMore}>Load {CHUNK_SIZE} more</button>
    </Fragment>
  );
};

export default StoryListContainer;
