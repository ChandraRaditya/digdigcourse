import React, { useEffect, useState } from "react";
import "./App.css";
import AppRoute from "./Route";
import LearningPath from "./Data/learningPath.json";
import detailedCourses from "./Data/detailedCourses.json";
import detailedMaterials from "./Data/detailedMaterials.json";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  // const checkDataObj = localStorage.getItem("obj");
  const [objData, setObjData] = useState(() => {
    const saved = localStorage.getItem("obj");
    const initialValue = JSON.parse(saved || "{}");
    return initialValue || "";
  });

  useEffect(() => {
    const obj = {
      LearningPath: LearningPath,
      detailedMaterials: detailedMaterials,
      detailedCourses: detailedCourses,
    };

    if (localStorage.getItem("obj") === null) {
      window.location.reload();
      localStorage.setItem("obj", JSON.stringify(obj));
    }

    // window.addEventListener("storage", () => {
    //   localStorage.setItem("obj", JSON.stringify(obj));
    // });

    // localStorage.setItem("obj", JSON.stringify(obj));
  }, []);

  console.log("ini obj state", objData);

  return (
    <Provider store={store}>
      <div className="App">
        <AppRoute />
      </div>
    </Provider>
  );
}

export default App;
