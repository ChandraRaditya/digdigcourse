import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "../Pages/Home";
import LearningPath from "../Pages/LearningPath";
import CourseDetail from "../Pages/Course Detail";

function AppRoute() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/learning-path-collection"></Route>
          <Route path="/learning-path" component={LearningPath} />
          <Route path='/course-detail' component={CourseDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRoute;
