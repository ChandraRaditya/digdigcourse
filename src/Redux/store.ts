import { configureStore } from "@reduxjs/toolkit";
// we no longer use reducer instead we use slice directly 
// import searchReducer from "./pages/search/reducer";
import idReducer from "./sliceId";

export default configureStore({
    reducer: {
        id: idReducer
    }
});
