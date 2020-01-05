import React, { Fragment, useEffect, useState } from 'react';
import Story from '../components/Story';
import { fetchTopStories } from '../services/api';

const COUNT: number = 30;

const HomePage: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<number[]>([]);
  const [visibleStories, setVisibleStories] = useState<number[]>([]);
  const [shown, setShown] = useState<number>(COUNT);

  useEffect(() => {
    setIsLoading(true);
    fetchTopStories().then(data => {
      setStories(data);
      setVisibleStories(data.slice(0, COUNT));
      setIsLoading(false);
    });
  }, []);

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

export default HomePage;
