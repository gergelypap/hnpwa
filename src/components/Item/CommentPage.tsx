import { BASE_URL, CommentInterface } from 'services/api';
import useSWR from 'swr';
import { fetcher } from 'utils';
import Comment from './Comment';
import PostDate from './PostDate';

interface Props {
  comment: CommentInterface;
}

const CommentPage = ({ comment }: Props) => {
  const { data: parent } = useSWR<CommentInterface>(
    `${BASE_URL}/item/${comment.parent}.json`,
    fetcher
  );

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
