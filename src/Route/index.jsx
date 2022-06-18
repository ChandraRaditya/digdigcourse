import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Home from "../Pages/Home";
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
            component={LearningPath}
          ></Route>
          <Route path="/learning-path/:id" component={LearningPath} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoute;
