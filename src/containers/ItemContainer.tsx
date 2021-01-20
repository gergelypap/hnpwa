import { useParams } from 'react-router-dom';

import CommentPage from 'components/Item/CommentPage';
import Story from 'components/Item/Story';
import { useFetchItem } from 'hooks/useFetch';
import { CommentInterface, ItemInterface } from 'services/api';

const ItemContainer = () => {
  const { id } = useParams() as any;
  if (!id) {
    throw new Error(`No ID found.`);
  }

  const [item, loading] = useFetchItem<ItemInterface & CommentInterface>(id);
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

export default ItemContainer;
