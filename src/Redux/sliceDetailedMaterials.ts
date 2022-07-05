import { createSlice } from "@reduxjs/toolkit";

export const detailedMaterialsSlice = createSlice({
    name: "id",
    initialState: {
        value: []
    },
    reducers: {
        detailedMaterialsQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { detailedMaterialsQuery } = detailedMaterialsSlice.actions;
export default detailedMaterialsSlice.reducer