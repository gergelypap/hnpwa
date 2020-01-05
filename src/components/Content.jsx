import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Content.scss';
import StoryListContainer from '../containers/StoryListContainer';
import { NEW_STORIES, TOP_STORIES } from '../services/api';

const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route path="/latest">
          <StoryListContainer url={NEW_STORIES} />
        </Route>
        <Route path="/past">
          <h2>past page</h2>
        </Route>
        <Route path="/">
          <StoryListContainer url={TOP_STORIES} />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
