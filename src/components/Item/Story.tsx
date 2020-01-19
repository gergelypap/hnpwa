import React from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';
import ListView from '../View/ListView';
import './Story.scss';

interface Props {
  id: number;
  showComments?: boolean;
}

function Story({ id, showComments = false }: Props) {
  const [story, loading] = useFetchItem(id);

  if (loading || !story) {
    return <div>Loading...</div>;
  }

  const itemUrl: string = `/item/${story.id}`;
  const baseUrl = story.url
    ? story.url.replace(/^https?:\/\/(www.)?/i, '').split(/[/?]/)[0]
    : null;
  return (
    <article className="story">
      <h1 className="story-title">
        <a href={story.url || itemUrl}>{story.title}</a>
      </h1>
      {baseUrl && (
        <a className="story-baseurl" href={`/from/${baseUrl}`}>
          ({baseUrl})
        </a>
      )}
      <div>
        <span className="story-detail">
          {story.score} points by <a href={`/user/${story.by}`}>{story.by}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>{timeAgo(story.time)}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>
            {story.descendants
              ? `${story.descendants} comment` +
                (story.descendants > 1 ? 's' : '')
              : 'discuss'}
          </a>
        </span>
      </div>
      {showComments && <ListView ids={story.kids} type="comment" />}
    </article>
  );
}

export default Story;
