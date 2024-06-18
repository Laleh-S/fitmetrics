import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: "",
    height: "",
    age: "",
    gender: "",
    unit: "",
    error: { weight: false, height: false, age: false },
}

const bmrSlice = createSlice({
    name: "bmr",
    initialState,
    reducers: {
        setWeight(state, action){
            state.weight = action.payload;
            if (action.payload) { 
                state.error = { ...state.error, weight: false };
            } 
        },

        setHeight(state, action){
            state.height = action.payload;
            if (action.payload) {  // clears error message after entering input
                state.error = { ...state.error, height: false };
            }
        },

        setAge(state, action){
            state.age = action.payload;
            if (action.payload) {  
                state.error = { ...state.error, age: false };
            }
        },

        setGender(state, action){
            state.gender = action.payload;
        },

        setUnit(state, action){
            state.unit = action.payload;
        },

        setActivityLevel(state, action){
            state.activityLevel = action.payload;
        },
        setError (state, action) { 
            state.error = action.payload; },

        calculateBMR(state){
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);
            const age = parseFloat(state.age);

            // Validates inputs
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                state.bmr = null;
                state.error = {
                    weight: isNaN(weight) || weight <= 0,
                    height: isNaN(height) || height <= 0,
                    age: isNaN(age) || age <= 0,
                };
                state.message = "Please provide valid inputs for all fields."; 
                return; // "return" stops the function from continuing if certain conditions are met.
            }
            
            //++++++++ BMR calculation logic based on unit system and gender ++++++++
            let bmrValue = null;
            if (state.unit === "imperial"){
                // Convert weight from lbs to kg and height from inches to cm
                const weightInKg = weight / 2.20462;
                const heightInCm = height * 2.54;

                if (state.gender === "male"){
                    bmrValue = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5;
                } else {
                    bmrValue = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
                }
            } else if (state.unit === "metric"){
                if (state.gender === "male"){
                    bmrValue = (10 * weight) + (6.25 * height) - (5 * age) + 5;
                } else {
                    bmrValue = (10 * weight) + (6.25 * height) - (5 * age) - 161;
                }
            }
            state.bmr = bmrValue !== null? bmrValue.toFixed(2) : null;
        },
    },
});

export const { 
    setWeight, 
    setHeight, 
    setAge, 
    setGender,
    setUnit, 
    setError,
    calculateBMR,
} = bmrSlice.actions;
export default bmrSlice.reducer;