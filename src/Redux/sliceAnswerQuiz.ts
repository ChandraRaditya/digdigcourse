import { createSlice } from "@reduxjs/toolkit";

export const answerQuizSlice = createSlice({
    name: "id",
    initialState: {
        value: ""
    },
    reducers: {
        answerQuizQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { answerQuizQuery } = answerQuizSlice.actions;
export default answerQuizSlice.reducer