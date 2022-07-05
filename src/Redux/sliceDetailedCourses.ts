import { createSlice } from "@reduxjs/toolkit";

export const detailedCoursesSlice = createSlice({
    name: "id",
    initialState: {
        value: []
    },
    reducers: {
        detailedCoursesQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { detailedCoursesQuery } = detailedCoursesSlice.actions;
export default detailedCoursesSlice.reducer