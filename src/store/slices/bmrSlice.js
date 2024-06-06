import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: "",
    height: "",
    bmr: null,
    age: "",
    gender: null,
    dailyCalories: null, // daily calorie needs based on activity level
    activityLevel: "", // the user's selected activity level, such as "sedentary", "lightlyActive", etc
    unit: null,
    message: "",
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
            console.log("Activity Level set to:", action.payload); // Log activity level
        },
        calculateBMR(state){
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);
            const age = parseFloat(state.age);

            //++++++++ Checks if weight, height, or age are invalid ++++++++
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                state.bmi = null;
                state.error = {
                    weight: isNaN(weight) || weight <= 0,
                    height: isNaN(height) || height <= 0,
                    age: isNaN(age) || age <= 0,
                };
                state.message = ""; 
                return; // "return" stops the function from continuing if certain conditions are met.
            }
            

            //++++++++ BMR calculation based on unit system and gender ++++++++
            let bmrValue = "";
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
            state.bmr = bmrValue.toFixed(2)

            //++++++++ Defines activity multipliers ++++++++
            const activityMultipliers = {
                "sedentary": 1.2,
                "lightlyActive": 1.375,
                "moderatelyActive": 1.55,
                "veryActive": 1.725,
                "extraActive": 1.9
            }

            if (state.activityLevel){
                state.dailyCalories = (bmrValue * activityMultipliers[state.activityLevel]).toFixed(2)
            }
        }
    }
});

export const { setWeight, setHeight, setAge, setGender, calculateBMR, setError, setUnit, setActivityLevel } = bmrSlice.actions;
export default bmrSlice.reducer;