import React from 'react';
import StoryFull from '../components/Item/StoryFull';
import useFetchItem from '../hooks/useFetchItem';
import useQueryParam from '../hooks/useQueryParam';

function ItemContainer() {
  const id = useQueryParam('id');
  const { item, loading } = useFetchItem(id);
  if (loading || !item) {
    return 'Loading...';
  }
  switch (item.type) {
    case 'story':
      return <StoryFull story={item} />;
    default:
      return 'Unknown item!';
  }
}

export default ItemContainer;
