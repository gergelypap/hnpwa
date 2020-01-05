import React, { useEffect, useState } from "react";
import { fetchItem } from "../services/api";

const Story = ({ id }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetchItem(id).then(setStory);
  }, []);

  if (!story) {
    return <div>Loading...</div>;
  }
  console.log(story);
  return (
    <div>
      <h2>
        <a href={story.url}>{story.title}</a>
      </h2>
      <span>
        {story.score} points by <a href={`/user?id=${story.by}`}>{story.by}</a>
      </span>
      <span>timestamp {story.time}</span>
      <span>{story.descendants} comments</span>
    </div>
  );
};

export default Story;
