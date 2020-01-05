import React, { Fragment, useEffect, useState } from "react";
import { fetchTopStories } from "../services/api";
import Story from "../components/Story";

const HomePage: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTopStories().then(data => {
      setStories(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Fragment>
      {isLoading ? "Loading..." : stories.map(id => <Story key={id} id={id} />)}
    </Fragment>
  );
};

export default HomePage;
