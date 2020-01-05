import React, { useEffect, useState } from 'react';
import { fetchItem, ItemResponse } from '../services/api';

interface StoryProps {
  id: number;
}

const Story: React.FunctionComponent<StoryProps> = ({ id }) => {
  const [story, setStory] = useState<ItemResponse | null>(null);

  useEffect(() => {
    fetchItem(id).then(setStory);
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }
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
