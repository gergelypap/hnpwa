import useSWR from 'swr/esm/use-swr';

import { BASE_URL, fetchJson } from 'services/api';
import { baseUrl, pluralize, timeAgo } from 'utils';
import ListView from 'components/View/ListView';
import './Story.scss';

interface Props {
  id: number;
  showComments?: boolean;
}

function Story({ id, showComments = false }: Props) {
  const { data, error } = useSWR(`${BASE_URL}/item/${id}.json`, fetchJson);

  if (error) {
    return <span>Failed to load data.</span>;
  }
  if (!data) {
    return <span>Fetching stories...</span>;
  }
  const itemUrl = `/item/${data.id}`;
  const source = data.url ? baseUrl(data.url) : null;
  return (
    <article className="story">
      <h1 className="story-title">
        <a href={data.url || itemUrl}>{data.title}</a>
      </h1>
      {source && (
        <a className="story-baseurl" href={`/from/${source}`}>
          ({source})
        </a>
      )}
      <div>
        <span className="story-detail">
          {pluralize(data.score, 'point', 'points')} by{' '}
          <a href={`/user/${data.by}`}>{data.by}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>{timeAgo(data.time)}</a>
        </span>
        <span className="story-detail">
          <a href={itemUrl}>
            {data.descendants
              ? pluralize(data.descendants, 'comment', 'comments')
              : 'discuss'}
          </a>
        </span>
      </div>
      {showComments && <ListView ids={data.kids} type="comment" />}
    </article>
  );
}

export default Story;
