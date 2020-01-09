import React from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import { timeAgo } from '../../utils';

interface Props {
  id: number;
}

const StoryListItem: React.FunctionComponent<Props> = ({ id }) => {
  const { item, loading } = useFetchItem(id);

  if (loading || !item) {
    return <div>Loading...</div>;
  }
  const itemUrl: string = `/item?id=${item.id}`;
  return (
    <li>
      <h2>
        <a href={item.url || itemUrl}>{item.title}</a>
      </h2>
      <span>
        {item.score} points by <a href={`/user?id=${item.by}`}>{item.by}</a>
      </span>
      <span>
        <a href={itemUrl}>{timeAgo(item.time)}</a>
      </span>
      <span>
        <a href={itemUrl}>
          {item.descendants
            ? `${item.descendants} comment` +
              (item.descendants > 1 ? 's' : '')
            : 'discuss'}
        </a>
      </span>
    </li>
  );
};

export default StoryListItem;
