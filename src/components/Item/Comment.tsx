import { useCallback, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr/esm/use-swr';

import { fetchItem } from 'services/api';
import './Comment.scss';
import PostDate from 'components/Item/PostDate';

interface Props {
  id: number;
}

function CommentSkeleton() {
  return (
    <div className="comment">
      <Skeleton width={'20%'} />
      <Skeleton count={2} />
    </div>
  );
}

function Comment({ id }: Props) {
  const [open, setOpen] = useState<boolean>(true);
  const { data, error } = useSWR(String(id), () => fetchItem(id));

  const toggleComment = useCallback(() => {
    setOpen(!open);
  }, [open]);

  if (error) {
    return <span>Failed to load data.</span>;
  }
  if (!data) {
    return <CommentSkeleton />;
  }
  return (
    <div className={'comment' + (!open ? ' comment-closed' : '')}>
      <div className="comment-header">
        <a href={`/user/${data.by}`}>{data.by}</a>
        <PostDate timestamp={data.time} url={`/item/${id}`} />
        <button className="comment-close" onClick={toggleComment}>
          {open ? '[-]' : `[+${data.kids ? data.kids.length : ''}]`}
        </button>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: data.text || '' }}
      />
      {data.kids && data.kids.map((id) => <Comment key={id} id={id} />)}
    </div>
  );
}

export default Comment;
