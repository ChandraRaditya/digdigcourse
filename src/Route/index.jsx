import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "../Pages/Home";
import LearningPathCollection from "../Pages/LearningPathCollection";
import LearningPath from "../Pages/LearningPath";
import DetailCourse from '../Pages/Course Detail';
import Course from "../Pages/Course";

function AppRoute() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/learning-path-collection" component={LearningPathCollection}></Route>
          <Route path="/learning-path/:id"  component={LearningPath}/>
          <Route path="/detail-course" component={DetailCourse}/>
          <Route path="/course" component={Course}/>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRoute;
