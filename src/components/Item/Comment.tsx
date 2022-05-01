import { useCallback, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PostDate from 'components/Item/PostDate';
import { BASE_URL, CommentInterface } from 'services/api';
import './Comment.scss';
import useSWR from 'swr';
import { fetcher } from 'utils';

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
  const { data: comment } = useSWR<CommentInterface>(
    `${BASE_URL}/item/${id}.json`,
    fetcher
  );
  const [open, setOpen] = useState(true);

  const toggleComment = useCallback(() => {
    setOpen(!open);
  }, [open]);

  if (!comment) {
    return <CommentSkeleton />;
  }
  return (
    <div className={'comment' + (!open ? ' comment-closed' : '')}>
      <div className="comment-header">
        <a href={`/user/${comment.by}`}>{comment.by}</a>
        <PostDate timestamp={comment.time} url={`/item/${id}`} />
        <button className="comment-close" onClick={toggleComment}>
          {open ? '[-]' : `[+${comment.kids ? comment.kids.length : ''}]`}
        </button>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: comment.text || '' }}
      />
      {comment.kids &&
        comment.kids.map((childId: number) => (
          <Comment key={childId} id={childId} />
        ))}
    </div>
  );
}

export default Comment;
