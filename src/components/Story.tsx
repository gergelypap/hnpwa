import React, { useEffect, useState } from 'react';
import { fetchItem, ItemResponse } from '../services/api';
import { timeAgo } from '../utils';

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
  const itemUrl: string = `/item?id=${story.id}`;
  return (
    <div>
      <h2>
        <a href={story.url || itemUrl}>{story.title}</a>
      </h2>
      <span>
        {story.score} points by <a href={`/user?id=${story.by}`}>{story.by}</a>
      </span>
      <span>
        <a href={itemUrl}>{timeAgo(story.time)}</a>
      </span>
      <span>
        <a href={itemUrl}>
          {story.descendants
            ? `${story.descendants} comment` +
              (story.descendants > 1 ? 's' : '')
            : 'discuss'}
        </a>
      </span>
    </div>
  );
};

export default Story;
