import React, { Fragment, useEffect, useState } from 'react';
import Story from '../components/Story';
import { fetchJson } from '../services/api';

const COUNT: number = 30;

interface Props {
  readonly url: string;
}

const StoryListContainer: React.FunctionComponent<Props> = ({ url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<number[]>([]);
  const [visibleStories, setVisibleStories] = useState<number[]>([]);
  const [shown, setShown] = useState<number>(COUNT);

  useEffect(() => {
    setIsLoading(true);
    fetchJson(url).then((data: number[]) => {
      setStories(data);
      setVisibleStories(data.slice(0, COUNT));
      setIsLoading(false);
    });
  }, [url]);

  const handleLoadMore = () => {
    const nextBatch = shown + COUNT;
    setVisibleStories(
      [...visibleStories].concat(stories.slice(shown, nextBatch))
    );
    setShown(nextBatch);
  };

  if (isLoading) {
    return <span>Fetching stories...</span>;
  }
  return (
    <Fragment>
      <ol>
        {visibleStories.map(id => (
          <Story key={id} id={id} />
        ))}
      </ol>
      <button onClick={handleLoadMore}>Load {COUNT} more</button>
    </Fragment>
  );
};

export default StoryListContainer;
