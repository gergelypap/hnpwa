import React, { useCallback, useState } from 'react';
import useSWR from 'swr/esm/use-swr';

import { fetchItem } from '../../services/api';
import { timeAgo } from '../../utils';
import ListView from '../View/ListView';
import './Comment.scss';

interface Props {
  id: number;
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
    return <span>Fetching stories...</span>;
  }
  return (
    <div className={'comment' + (!open ? ' comment-closed' : '')}>
      <div className="comment-header">
        <a href={`/user/${data.by}`}>{data.by}</a>
        <a href={`/item/${id}`}>{timeAgo(data.time)}</a>
        <button className="comment-close" onClick={toggleComment}>
          {open ? '[-]' : `[+${data.kids ? data.kids.length : ''}]`}
        </button>
      </div>
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: data.text || '' }}
      />
      {data.kids && <ListView ids={data.kids} type="comment" />}
    </div>
  );
}

export default Comment;
