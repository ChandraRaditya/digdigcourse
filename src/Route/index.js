import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LearningPath from "../Pages/LearningPath";

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/learning-path-collection"></Route>
        <Route path="/learning-path">
          <LearningPath />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoute;
