import { ReactElement } from 'react';
import { timeAgo } from 'utils';

interface Props {
  timestamp: number;
  url?: string;
}

function PostDate({ timestamp, url }: Props): ReactElement {
  const datetime = new Date(timestamp * 1000).toISOString();
  const time = <time dateTime={datetime}>{timeAgo(timestamp)}</time>;
  if (url) {
    return <a href={url}>{time}</a>;
  }
  return time;
}

export default PostDate;
