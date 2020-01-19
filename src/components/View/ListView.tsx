import React from 'react';
import Comment from '../Item/Comment';
import Story from '../Item/Story';

interface Props {
  ids: number[];
  type: 'story' | 'comment';
}

// TODO: Smarter?
function getItem(id: number, type: string) {
  switch (type) {
    case 'story':
      return <Story key={id} id={id} />;
    case 'comment':
      return <Comment key={id} id={id} />;
    default:
      throw new Error(`Unknown item ${type}`);
  }
}

function ListView({ ids = [], type }: Props) {
  if (ids.length === 0) {
    return <span>No items.</span>;
  }
  return <div>{ids.map(id => getItem(id, type))}</div>;
}

export default ListView;
