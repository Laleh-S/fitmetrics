// context API:
// A state management system that alows you to create and share global data (states) across different components without having 
// to pass props manually.

// context API components:
// - createContext(): Used to create a new context.
// - context.Provider: used to provide a context to the components in our applitation by wrapping around App or another high-level component.
// - useContext: consumes the context inside different components within our app.


import React, { createContext, useState } from "react";

export const CalculatorsContext = createContext(); 

export const CalculatorsContextProvider = ({ children }) => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [unit, setUnit] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [bmr, setBmr] = useState(null);
    const [tdee, setTdee] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState({
        weight: false,
        height: false,
        age: false,
        unit: false,
        gender: false,
        activityLevel: false,
    });

    // ❈❈❈❈❈❈❈❈❈❈ BMR CALCULATOR FUNCTION ❈❈❈❈❈❈❈❈❈❈ //
    // ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈ //
    const calculateBMR = () => {
        if (weight <= 0 || height <= 0 || age <= 0 || !unit || !gender ){
            setError({
                weight: weight <= 0,
                height: height <= 0 ,
                age: age <= 0,
                unit: !unit,
                gender: !gender,
            });
            return;
        };

        let bmrValue = null;
        const weightInKg = weight / 2.20462; // convert weight from lbs to kg
        const heightInCm = height * 2.54; // converts height from inches to cm
        
        if (unit === "imperial"){
            if (gender === "male"){
                bmrValue = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5;
            } else {
                bmrValue = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
            }
        } else if (unit === "metric"){
            if (gender === "male"){
                bmrValue = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            } else {
                bmrValue = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            }
        }
        setBmr(bmrValue !== null? bmrValue.toFixed(2) : null);
        return bmrValue;
    };

    // ❈❈❈❈❈❈❈❈❈❈ TDEE CALCULATOR FUNCTION ❈❈❈❈❈❈❈❈❈❈❈ 
    // ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈ 
    const calculateTDEE = () => {
        const activityMultipliers = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            extraActive: 1.9,
        };

        if (weight <= 0 || height <= 0 || age <= 0 || !unit || !gender || !activityLevel){
            setError({
                weight: weight <= 0,
                height: height <= 0 ,
                age: age <= 0,
                unit: !unit,
                gender: !gender,
                activityLevel: !activityLevel,
            });
            return;
        };

        const bmrValue = calculateBMR();
        if (bmrValue !== null) {
            const tdeeValue = bmrValue * activityMultipliers[activityLevel];
            setTdee(tdeeValue.toFixed(2));
        } else {
            setTdee(null);
        }
    };

    // ❈❈❈❈❈❈❈❈❈❈ BMI CALCULATOR ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈ 
    // ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈
    const calculateBMI = () => {
        if (weight <= 0 || height <= 0 || !unit){
            setError({
                weight: weight <= 0,
                height: height <= 0,
                unit: !unit,
            });
            setMessage("");
            setBmi(null);
            return;
        };
    
        let bmiValue;
        if (unit === "imperial") {
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
        
        setBmi(bmiValue.toFixed(2));
        setMessage(bmiMessage);
    };

    
    

    // ❈❈❈❈❈❈❈❈❈❈ FUNCTION TO CLEAR INPUTS ❈❈❈❈❈❈❈❈❈❈ 
    // ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈
    const clearInputs = () =>{
            // Clears all input fields
            setWeight("");
            setHeight("");
            setAge("");
            setGender("");
            setUnit("");
            setActivityLevel("");
            //Clears results
            setBmr(null);
            setTdee(null);
            setBmi(null);
            setMessage("");
            setError({});
    };

    // ❈❈❈❈❈❈❈❈❈❈ CONTEXT VALUE OBJECT ❈❈❈❈❈❈❈❈❈❈❈❈❈❈ 
    // ❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈❈
    const contextValue = {
        weight, setWeight,
        height, setHeight,
        age, setAge,
        gender, setGender,
        unit, setUnit,
        activityLevel, setActivityLevel,
        bmr, setBmr,
        tdee, setTdee,
        bmi, setBmi,
        error, setError,
        message, setMessage,
        clearInputs,
        calculateBMR,
        calculateTDEE,
        calculateBMI,
    };

    return (
        <CalculatorsContext.Provider value={contextValue}> 
            {children}
        </CalculatorsContext.Provider>
    )
};

export default CalculatorsContextProvider;

