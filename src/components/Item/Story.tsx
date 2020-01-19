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
  const { item, loading } = useFetchItem(id);

  if (loading || !item) {
    return <div>Loading...</div>;
  }

  const itemUrl: string = `/item/${item.id}`;
  const baseUrl = item.url
    ? item.url.replace(/^https?:\/\/(www.)?/i, '').split(/[/?]/)[0]
    : null;
  return (
    <article className="story">
      <h1 className="story-title">
        <a href={item.url || itemUrl}>{item.title}</a>
      </h1>
      {baseUrl && (
        <a className="story-baseurl" href={`/from/${baseUrl}`}>
          ({baseUrl})
        </a>
      )}
      <div>
        <span className="story-detail">
          {item.score} points by <a href={`/user/${item.by}`}>{item.by}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>{timeAgo(item.time)}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>
            {item.descendants
              ? `${item.descendants} comment` +
                (item.descendants > 1 ? 's' : '')
              : 'discuss'}
          </a>
        </span>
      </div>
      {showComments && <ListView ids={item.kids} type="comment" />}
    </article>
  );
}

export default Story;
