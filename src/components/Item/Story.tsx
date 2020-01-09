import React from 'react';
import { ItemResponse } from '../../services/api';
import { timeAgo } from '../../utils';

// TODO: Create interface for StoryListItem.
// TODO: Obj. destructure typehint looks ugly.

function Story({ story }: { story: ItemResponse }) {
  return (
    <div>
      <h1>{story.title}</h1>
      <span>{story.score} points by {story.by} {timeAgo(story.time)}</span>
      {story.kids ? (
        <h2>Comments ({story.kids.length})</h2>
      ) : (
        "No comments"
      )}
    </div>
  );
}

export default Story;
