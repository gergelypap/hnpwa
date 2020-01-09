import React from 'react';
import CommentListContainer from '../../containers/CommentListContainer';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';

interface Props {
  id: number;
}

function Comment({ id }: Props) {
  const { item, loading } = useFetchItem(id);
  if (loading || !item) {
    return <span>Loading comment...</span>;
  }
  return (
    <div>
      <span>{item.by} {timeAgo(item.time)} [-]</span>
      <p>{item.text}</p>
      {item.kids && <CommentListContainer ids={item.kids} />}
    </div>
  );
}

export default Comment;
