import { configureStore } from "@reduxjs/toolkit";
// we no longer use reducer instead we use slice directly 
// import searchReducer from "./pages/search/reducer";
import learningPathReducer from "./sliceLearningPath";
import detailedCoursesReducer from "./sliceDetailedCourses"

export default configureStore({
    reducer: {
        learningPathData: learningPathReducer,
        detailedCoursesData: detailedCoursesReducer
    }
});
