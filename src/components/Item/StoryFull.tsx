import React from 'react';
import { ItemResponse } from '../../services/api';
import { timeAgo } from '../../utils';

// TODO: Create interface for Story.
// TODO: Obj. destructure typehint looks ugly.

function StoryFull({ story }: { story: ItemResponse }) {
  return (
    <div>
      <h1>{story.title}</h1>
      {/*79 points by Deimorz 45 minutes ago | hide | past | web | favorite | 53 comments*/}
      <span>{story.score} points by {story.by} {timeAgo(story.time)}</span>
      {story.kids ? (
        <h2>Comments ({story.kids.length})</h2>
      ) : (
        "No comments"
      )}
      {story.kids.map(comment => {

      })}
    </div>
  );
}

export default StoryFull;
