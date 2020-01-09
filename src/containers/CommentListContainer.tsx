import React from 'react';
import Comment from '../components/Item/Comment';

function CommentListContainer({ ids }: { ids: number[] }) {
  if (ids.length === 0) {
    return <span>No comments yet.</span>;
  }
  return (
    <div>
      {ids.map(id => (
        <Comment key={id} id={id} />
      ))}
    </div>
  );
}

export default CommentListContainer;
