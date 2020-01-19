import React, { useState } from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';
import ListView from '../View/ListView';
import './Comment.scss';

interface Props {
  id: number;
}

function Comment({ id }: Props) {
  const { item, loading } = useFetchItem(id);
  const [open, setOpen] = useState<boolean>(true);

  function toggleComment() {
    setOpen(prev => !prev);
  }

  if (loading || !item) {
    return <span>Loading comment...</span>;
  }
  return (
    <div className={'comment' + (!open ? ' comment-closed' : '')}>
      <div className="comment-header">
        <a href={`/user/${item.by}`}>{item.by}</a>
        <a href={`/item/${id}`}>{timeAgo(item.time)}</a>
        <button className="comment-close" onClick={toggleComment}>
          {open ? '[-]' : `[+${item.kids ? item.kids.length : ''}]`}
        </button>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: item.text || '' }}
      />
      {item.kids && <ListView ids={item.kids} type="comment" />}
    </div>
  );
}

export default Comment;
