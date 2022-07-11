import { configureStore } from "@reduxjs/toolkit";
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
