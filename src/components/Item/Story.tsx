import React from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { baseUrl, pluralize, timeAgo } from '../../utils';
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

  const itemUrl = `/item/${story.id}`;
  const source = story.url ? baseUrl(story.url) : null;
  return (
    <article className="story">
      <h1 className="story-title">
        <a href={story.url || itemUrl}>{story.title}</a>
      </h1>
      {source && (
        <a className="story-baseurl" href={`/from/${source}`}>
          ({source})
        </a>
      )}
      <div>
        <span className="story-detail">
          {pluralize(story.score, 'point', 'points')} by{' '}
          <a href={`/user/${story.by}`}>{story.by}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>{timeAgo(story.time)}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>
            {story.descendants
              ? pluralize(story.descendants, 'comment', 'comments')
              : 'discuss'}
          </a>
        </span>
      </div>
      {showComments && <ListView ids={story.kids} type="comment" />}
    </article>
  );
}

export default Story;
