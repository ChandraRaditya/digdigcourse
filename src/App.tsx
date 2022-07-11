import React, { useEffect } from "react";
import "./App.css";
import AppRoute from "./Route";
import LearningPath from "./Data/learningPath.json";
import detailedCourses from "./Data/detailedCourses.json";
import detailedMaterials from "./Data/detailedMaterials.json";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  useEffect(() => {
    const obj = {
      LearningPath: LearningPath,
      detailedMaterials: detailedMaterials,
      detailedCourses: detailedCourses,
    };

    if (localStorage.getItem("obj") === null) {
      localStorage.setItem("obj", JSON.stringify(obj));
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AppRoute />
      </div>
    </Provider>
  );
}

export default App;
