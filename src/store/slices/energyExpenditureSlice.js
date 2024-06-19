import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weight: "",
    height: "",
    bmr: null,
    tdee: null,
    age: "",
    gender: "",
    unit: "",
    activityLevel: "", // the user's selected activity level, such as "sedentary", "lightlyActive", etc
    message: "",
    error: { 
        weight: false, 
        height: false, 
        age: false,
        unit: false,
        gender: false,
        activityLevel: false, 
    },
}

const energyExpenditureSlice = createSlice({
    name: "energyExpenditure",
    initialState,
    reducers: {
        setWeight(state, action){
            state.weight = action.payload;
            if (action.payload) { 
                state.error.weight = false;
            } 
        },

        setHeight(state, action) {
            state.height = action.payload; 
            if (action.payload) { 
                state.error = { ...state.error, height: false };
            }
        },
        
        setAge(state, action) {
            state.age = action.payload;
            if (action.payload) { 
                state.error = { ...state.error, age: false };
            }
        },
        
        setGender(state, action) {
            state.gender = action.payload;
            if (action.payload) { 
                state.error = { ...state.error, gender: false };
            }
        },
        
        setUnit(state, action) {
            state.unit = action.payload;
            if (action.payload) { 
                state.error = { ...state.error, unit: false };
            }
        },
        
        setActivityLevel(state, action) {
            state.activityLevel = action.payload;
            if (action.payload) { 
                state.error = { ...state.error, activityLevel: false };
            }
        },
        setError (state, action) { 
            state.error = action.payload; 
        },
        calculateBMR(state){
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);
            const age = parseFloat(state.age);

            // Validates inputs
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !state.unit || !state.gender) {
                state.bmr = null;
                state.error = {
                    weight: isNaN(weight) || weight <= 0,
                    height: isNaN(height) || height <= 0,
                    age: isNaN(age) || age <= 0,
                    unit: !state.unit,
                    gender: !state.gender,
                };
                state.message = "Please provide valid inputs for all fields."; 
                return; // "return" stops the function from continuing if certain conditions are met.
            }
            
            //++++++++ BMR calculation based on unit system and gender ++++++++
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
            state.message = ""; // Clears any previous messages
        },
        
        calculateTDEE(state) {
            const activityMultipliers = {
                sedentary: 1.2,
                lightlyActive: 1.375,
                moderatelyActive: 1.55,
                veryActive: 1.725,
                extraActive: 1.9,
            };

            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);
            const age = parseFloat(state.age);

            // Validate inputs 
            if (
                isNaN(weight) || 
                isNaN(height) || 
                weight <= 0 || 
                height <= 0 || 
                !state.unit || // if unit is null
                !state.gender || // if gender is null
                !state.activityLevel //  checks if state.activityLevel is null, undefined, false, empty string, etc.
            ) {
                state.tdee = null;
                state.error = {
                    ...state.error,
                    weight: isNaN(weight) || weight <= 0,
                    height: isNaN(height) || height <= 0,
                    age: isNaN(age) || age <= 0,
                    unit: !state.unit,
                    gender: !state.gender,
                    activityLevel: !state.activityLevel,
                };
                state.message = "Please provide valid inputs for all fields.";
                return;
            }

            // Calculate BMR
            let bmrValue = null;
            if (state.unit === "imperial") {
                // Convert weight from lbs to kg and height from inches to cm
                const weightInKg = weight / 2.20462;
                const heightInCm = height * 2.54;

                if (state.gender === "male") {
                    bmrValue = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
                } else {
                    bmrValue = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
                }
            } else if (state.unit === "metric") {
                if (state.gender === "male") {
                    bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
                } else {
                    bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
                }
            }

            // Calculate TDEE
            state.tdee = (bmrValue * activityMultipliers[state.activityLevel]).toFixed(2);
            state.message = ""; // Clear any previous messages
            console.log("Calculating TDEE...");
        },
        clearInputs: (state) => {
            // Clears all input fields
            state.weight = "";
            state.height = "";
            state.age = "";
            state.gender = "";
            state.unit = "";
            state.activityLevel = "";
            // Clears results
            state.bmr = null;
            state.tdee = null;
            state.message = "";
            state.error = {};
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
    calculateTDEE, 
    setActivityLevel,
    clearInputs,
} = energyExpenditureSlice.actions;
export default energyExpenditureSlice.reducer;