import React, { Fragment, useEffect, useState } from 'react';
import Story from '../components/Story';
import { fetchTopStories } from '../services/api';

const HomePage: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<number[]>([]);
  const [limit] = useState<number>(25);

  useEffect(() => {
    setIsLoading(true);
    fetchTopStories().then(data => {
      setStories(data.slice(0, limit));
      setIsLoading(false);
    });
  }, []);

  return (
    <Fragment>
      {isLoading ? 'Loading...' : stories.map(id => <Story key={id} id={id} />)}
    </Fragment>
  );
};

export default HomePage;
