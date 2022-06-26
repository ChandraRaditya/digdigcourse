import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: "id",
    initialState: {
        value: ''
    },
    reducers: {
        idQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { idQuery } = idSlice.actions;
export default idSlice.reducer