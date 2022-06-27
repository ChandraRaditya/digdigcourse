import { createSlice } from "@reduxjs/toolkit";

export const learningPathSlice = createSlice({
    name: "id",
    initialState: {
        value: []
    },
    reducers: {
        learningPathQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { learningPathQuery } = learningPathSlice.actions;
export default learningPathSlice.reducer