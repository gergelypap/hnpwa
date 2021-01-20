import Comment from './Comment';
import PostDate from './PostDate';
import useFetchItem from 'hooks/useFetchItem';

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
        <PostDate timestamp={comment.time} />
        {' on: '}
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
