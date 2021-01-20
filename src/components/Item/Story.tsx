import useSWR from 'swr/esm/use-swr';

import { BASE_URL, fetchJson } from 'services/api';
import { baseUrl, pluralize } from 'utils';
import Comment from 'components/Item/Comment';
import Skeleton from 'react-loading-skeleton';
import PostDate from 'components/Item/PostDate';
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
      <div></div>
      <Skeleton width={'40%'} />
    </div>
  );
}

function Story({ id, showComments = false }: Props) {
  const { data: story, error } = useSWR(
    `${BASE_URL}/item/${id}.json`,
    fetchJson
  );

  if (error) {
    return <span>Failed to load story.</span>;
  }
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
        story.kids.map((id: number) => <Comment key={id} id={id} />)}
    </article>
  );
}

export default Story;
