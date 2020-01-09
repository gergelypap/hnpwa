import React from 'react';
import CommentListContainer from '../../containers/CommentListContainer';
import { ItemResponse } from '../../services/api';
import { timeAgo } from '../../utils';

// TODO: Create interface for StoryListItem.
// TODO: Obj. destructure typehint looks ugly.

function Story({ story }: { story: ItemResponse }) {
  return (
    <div>
      <h1>{story.title}</h1>
      <span>{story.score} points by {story.by} {timeAgo(story.time)}</span>
      <CommentListContainer ids={story.kids || []} />
    </div>
  );
}

export default Story;
