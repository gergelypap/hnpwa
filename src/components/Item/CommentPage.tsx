import Comment from './Comment';
import useFetchItem from 'hooks/useFetchItem';
import { timeAgo } from 'utils';

interface Props {
  comment: {
    id: number;
    parent: number;
    by: string;
    time: number;
    text: string;
    kids: number[];
  };
}

const CommentPage = ({ comment }: Props) => {
  const [parent] = useFetchItem(comment.parent);
  return (
    <>
      <div className="comment-header">
        <a href={`/user/${comment.by}`}>{comment.by}</a>
        <span>{timeAgo(comment.time)}</span>
        <a href={`/item/${comment.parent}`}>parent</a>
        {'on: '}
        <a href={`/item/${comment.parent}`}>{parent && parent.title}</a>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
      {comment.kids && comment.kids.map((id) => <Comment key={id} id={id} />)}
    </>
  );
};

export default CommentPage;
