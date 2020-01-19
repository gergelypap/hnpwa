import React from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';
import ListView from '../View/ListView';
import './Comment.scss';

interface Props {
  id: number;
}

function Comment({ id }: Props) {
  const { item, loading } = useFetchItem(id);
  if (loading || !item) {
    return <span>Loading comment...</span>;
  }
  return (
    <div className="comment">
      <div className="comment-header">
        <a href={`/user?id=${item.by}`}>{item.by}</a>
        <a href={`/item?id=${id}`}>{timeAgo(item.time)}</a>
        <button className="comment-close">[-]</button>
      </div>
      <div>{item.text}</div>
      {item.kids && <ListView ids={item.kids} type="comment" />}
    </div>
  );
}

export default Comment;
