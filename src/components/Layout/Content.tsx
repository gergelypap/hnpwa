import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemContainer from '../../containers/ItemContainer';
import StoryListContainer from '../../containers/StoryListContainer';
import { NEW_STORIES, TOP_STORIES } from '../../services/api';
import './Content.scss';

const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route exact={true} path="/">
          <StoryListContainer url={TOP_STORIES} />
        </Route>
        <Route path="/latest">
          <StoryListContainer url={NEW_STORIES} />
        </Route>
        <Route path="/past">
          <h2>past page</h2>
        </Route>
        <Route path="/item/:id">
          <ItemContainer />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
