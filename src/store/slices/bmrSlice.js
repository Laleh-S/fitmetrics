import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: "",
    height: "",
    bmr: null,
    age: "",
    gender: "",
    dailyCalories: null, // daily calorie needs based on activity level
    activityLevel: null, // the user's selected activity level, such as "sedentary", "lightlyActive", etc
    unit: "metric",
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
                if (state.gender === "male"){
                    bmrValue = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
                } else {
                    bmrValue = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
                }
            } 
        
            else if (state.unit === "metric"){
                if (state.gender === "male"){
                    bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                } else {
                    bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
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