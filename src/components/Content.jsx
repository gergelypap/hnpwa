import React from "react";
import { Route, Switch } from "react-router-dom";
import NewPosts from "../pages/NewPosts";
import PastPosts from "../pages/PastPosts";
import "./Content.scss";

const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/">
          <NewPosts />
        </Route>
        <Route path="/past">
          <PastPosts />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
