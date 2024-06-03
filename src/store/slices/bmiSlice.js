// createSlice: 
// is a function provided by Redux Toolkit for creating a slice of your Redux state. 
// It takes an object as an argument with several properties: name, initialState, and reducers.

// Redux slices:
// are pieces of the Redux state and the associated actions and reducers.

// Reducers or reducer functions:
// This is an object where you define functions. specifys how the state should change in response to different actions. 

// calculateBMI:
// doesn't require additional data from the action payload. Instead, 
// it calculates the BMI based on the current state's weight and height properties.

// bmiSlice:
// specifies the initial state. It defines some reducer functions that handle corresponding actions 
// dispatched by the application to update the BMI state.

import { createSlice } from "@reduxjs/toolkit";

const initialState = { // This defines the initial state of our BMI slice with default values.
    weight: "",
    height: "",
    bmi: null,
    unit: "metric",
    message: "",
    error: null,
};

const bmiSlice = createSlice({
    name: "bmi",
    initialState,
    reducers: {
        setWeight(state, action){
            state.weight = action.payload;
            if (action.payload) { 
                // This code checks if there's a new weight value provided (not empty, null, or undefined); if so, 
                // it updates only the weight part of the error state to false, indicating no weight-related error.
                state.error = { ...state.error, weight: false };
            }
        },
        setHeight(state, action){
            state.height = action.payload; 
            if (action.payload) {  // clears error message after entering input
                state.error = { ...state.error, height: false };
            }
        },
        setUnit(state, action){
            state.unit = action.payload;  // action.payload is the data carried by the action to update the height property of the state.
        }, 
        calculateBMI(state){
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);

            // Ensures the input is not empty, NaN, or non-positive
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                state.bmi = null;
                state.error = {
                    weight: isNaN(weight) || weight <= 0,
                    height: isNaN(height) || height <= 0
                };
                state.message = ""; 
                return; // "return" stops the function from continuing if certain conditions are met.
            }

            // BMI calculation formula
            let bmiValue;
            if (state.unit === "imperial") {
                bmiValue = (weight / (height * height)) * 703;
            } else {
                const heightToMeter = height / 100;
                bmiValue = weight / (heightToMeter * heightToMeter);
            }

            
            // Determines the BMI range
            let bmiMessage = "";

            if (bmiValue < 18.5) {
                bmiMessage = "Underweight";
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                bmiMessage = "Normal weight";
            } else if (bmiValue >= 25 && bmiValue < 30) {
                bmiMessage = "Overweight";
            } else if (bmiValue >= 30 && bmiValue < 35) {
                bmiMessage = "Obese";
            } else if (bmiValue >= 35 && bmiValue < 40) {
                bmiMessage = "Severely Obese";
            } else if (bmiValue > 40){
                bmiMessage = "Very Severely Obese";
            }
            
            state.bmi = bmiValue.toFixed(2);
            state.message = bmiMessage;
        },
        
    },
});

// Exporting the action creators generated by the createSlice function. 
export const { setWeight, setHeight, calculateBMI, setError, setUnit } = bmiSlice.actions;
export default bmiSlice.reducer;