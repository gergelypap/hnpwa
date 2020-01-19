import React, { useState } from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';
import ListView from '../View/ListView';
import './Comment.scss';

interface Props {
  id: number;
}

function Comment({ id }: Props) {
  const [comment, loading] = useFetchItem(id);
  const [open, setOpen] = useState<boolean>(true);

  function toggleComment() {
    setOpen(prev => !prev);
  }

  if (loading || !comment) {
    return <span>Loading comment...</span>;
  }
  return (
    <div className={'comment' + (!open ? ' comment-closed' : '')}>
      <div className="comment-header">
        <a href={`/user/${comment.by}`}>{comment.by}</a>
        <a href={`/item/${id}`}>{timeAgo(comment.time)}</a>
        <button className="comment-close" onClick={toggleComment}>
          {open ? '[-]' : `[+${comment.kids ? comment.kids.length : ''}]`}
        </button>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: comment.text || '' }}
      />
      {comment.kids && <ListView ids={comment.kids} type="comment" />}
    </div>
  );
}

export default Comment;
