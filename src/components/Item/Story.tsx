import Comment from 'components/Item/Comment';
import PostDate from 'components/Item/PostDate';
import Skeleton from 'react-loading-skeleton';
import { BASE_URL } from 'services/api';
import useSWR from 'swr';
import { baseUrl, fetcher, pluralize } from 'utils';
import './Story.scss';

interface Props {
  id: number;
  showComments?: boolean;
}

function StorySkeleton() {
  const randomWidth = Math.floor(Math.random() * 80) + 20;
  return (
    <div className="story">
      <Skeleton width={`${randomWidth}%`} height={25} />
      <Skeleton width={'40%'} />
    </div>
  );
}

function Story({ id, showComments = false }: Props) {
  const { data: story } = useSWR(`${BASE_URL}/item/${id}.json`, fetcher);

  if (!story) {
    return <StorySkeleton />;
  }
  const itemUrl = `/item/${story.id}`;
  const source = story.url ? baseUrl(story.url) : null;
  return (
    <article className="story">
      <h1 className="story-title">
        <a href={story.url || itemUrl}>{story.title}</a>
      </h1>
      {source && (
        <a className="story-baseurl" href={`/from/${source}`}>
          ({source})
        </a>
      )}
      <div>
        <span className="story-detail">
          {pluralize(story.score, 'point', 'points')} by{' '}
          <a href={`/user/${story.by}`}>{story.by}</a>
        </span>
        <span className="story-detail">
          <PostDate timestamp={story.time} url={itemUrl} />
        </span>
        <span className="story-detail">
          <a href={itemUrl}>
            {story.descendants
              ? pluralize(story.descendants, 'comment', 'comments')
              : 'discuss'}
          </a>
        </span>
      </div>
      {showComments &&
        story.kids &&
        story.kids.map((commentId: number) => (
          <Comment key={commentId} id={commentId} />
        ))}
      {showComments && !story.kids && <p>There are no comments yet.</p>}
    </article>
  );
}

export default Story;
