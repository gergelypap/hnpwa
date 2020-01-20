import React from 'react';
import { useParams } from 'react-router-dom';

import CommentPage from '../components/Item/CommentPage';
import Story from '../components/Item/Story';
import useFetchItem from '../hooks/useFetchItem';

export default () => {
  const { id } = useParams();
  if (!id) {
    throw new Error(`No ID found.`);
  }

  const [item, loading] = useFetchItem(parseInt(id, 10));
  if (loading || !item) {
    return <div>Loading...</div>;
  }
  switch (item.type) {
    case 'story':
      return <Story id={item.id} showComments={true} />;
    case 'comment':
      return <CommentPage comment={item} />;
    default:
      throw new Error(`Unknown item type ${item.type}`);
  }
};
