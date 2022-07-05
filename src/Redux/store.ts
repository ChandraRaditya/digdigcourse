import { configureStore } from "@reduxjs/toolkit";
// we no longer use reducer instead we use slice directly 
// import searchReducer from "./pages/search/reducer";
import learningPathReducer from "./sliceLearningPath";
import detailedCoursesReducer from "./sliceDetailedCourses"
import detailedMaterialsReducer from "./sliceDetailedMaterials"
import answerQuizReducer from "./sliceAnswerQuiz";

export default configureStore({
    reducer: {
        learningPathData: learningPathReducer,
        detailedCoursesData: detailedCoursesReducer,
        detailedMaterialsData: detailedMaterialsReducer,
        answerQuizData: answerQuizReducer
    }
});
