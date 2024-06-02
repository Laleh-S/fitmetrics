import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: "",
    height: "",
    bmi: null,
    age: "",
    gender: "",
    unit: "metric",
    message: "",
    error: null,
}

const bmrSlice = createSlice({
    name: "bmr",
    initialState,
    reducers: {
        setWeight(state, action){
            state.weight = action.playload;
        },
        setHeight(state, action){
            state.height = action.payload;
        },
        setAge(state, action){
            state.age = action.payload;
        },
    }
});

export const { setWeight, setHeight } = bmrSlice.actions;
export default bmrSlice.reducer;