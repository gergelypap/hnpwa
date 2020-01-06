import React, { useEffect, useState } from 'react';
import { fetchItem, ItemResponse } from '../services/api';
import { timeAgo } from '../utils';

interface Props {
  id: number;
}

const Story: React.FunctionComponent<Props> = ({ id }) => {
  const [story, setStory] = useState<ItemResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const fetch = async () => {
      try {
        const json = await fetchItem(id);
        if (!cancelled) {
          setStory(json);
        }
      } catch (e) {
        console.log('ERROR');
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    fetch();
    return () => {
      setStory(null);
      setLoading(false);
      cancelled = true;
    };
  }, [id]);

  if (loading || !story) {
    return <div>Loading...</div>;
  }
  const itemUrl: string = `/item?id=${story.id}`;
  return (
    <li>
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
    </li>
  );
};

export default Story;
