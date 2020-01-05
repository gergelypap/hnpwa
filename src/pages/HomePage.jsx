import React, { Fragment, useEffect, useState } from "react";
import { fetchTopStories } from "../services/api";
import Story from "../components/Story";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState([]);

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
