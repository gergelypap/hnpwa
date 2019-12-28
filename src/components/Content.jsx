import React from "react";
import { Route, Switch } from "react-router-dom";
import LatestPage from "../pages/LatestPage";
import PastPage from "../pages/PastPage";
import HomePage from "../pages/HomePage";
import "./Content.scss";

const Content = () => {
  return (
    <main className="content">
      <Switch>
        <Route path="/latest">
          <LatestPage />
        </Route>
        <Route path="/past">
          <PastPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
