import { useParams } from 'react-router-dom';

import CommentPage from 'components/Item/CommentPage';
import Story from 'components/Item/Story';
import { BASE_URL, CommentInterface, ItemInterface } from 'services/api';
import useSWR from 'swr';
import { fetcher } from 'utils';

const ItemContainer = () => {
  const { id } = useParams() as any;
  if (!id) {
    throw new Error(`No ID found.`);
  }

  const { data: item } = useSWR<ItemInterface & CommentInterface>(
    `${BASE_URL}/item/${id}.json`,
    fetcher
  );

  if (!item) {
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

export default ItemContainer;
