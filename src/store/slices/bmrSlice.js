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
            state.weight = action.payload; 
        },
        setHeight(state, action){
            state.height = action.payload;
        },
        setAge(state, action){
            state.age = action.payload;
        },
        setGender(state, action){
            state.gender = action.payload;
        },
        setUnit(state, action){
            state.unit = action.payload;
        },
        calculateBMR(state){
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);
            const age = parseFloat(state.age);

            // BMR calculation formula
            let bmrValue = "";
            if (state.unit === "imperial"){
                if (state.gender === "male"){
                    bmrValue = 88.362 + (6.076 * weight) + (12.82 * height) - (6.8 * age)
                } else {
                    bmrValue = 447.593 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
                }
            } 
        
            else if (state.unit === "metric"){
                if (state.gender === "male"){
                    bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
                } else {
                    bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
                }
            }
            state.bmr = bmrValue.toFixed(2)
        }
    }
});

export const { setWeight, setHeight, setAge, setGender, calculateBMR, setError, setUnit } = bmrSlice.actions;
export default bmrSlice.reducer;