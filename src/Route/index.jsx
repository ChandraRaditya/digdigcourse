import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Course from "../Pages/Course";
import Home from "../Pages/Home";
import LearningPathCollection from "../Pages/LearningPathCollection";
import LearningPath from "../Pages/LearningPath";

function AppRoute() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/learning-path-collection"
            component={LearningPathCollection}
          ></Route>
          <Route path="/learning-path/:id" component={LearningPath} />
          <Route path="/course" component={Course} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoute;
