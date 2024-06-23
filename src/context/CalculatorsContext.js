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

    const calculateBMR = () => {
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !unit || !gender){
            setError({
                weight: isNaN(weight) || weight <= 0,
                height: isNaN(height) || height <= 0,
                age: isNaN(age) || age <= 0,
                unit: !unit,
                gender: !gender,
            });
            return;
        };

        let bmrValue = null;
        if (unit === "imperial"){
            // Convert weight from lbs to kg and height from inches to cm
            const weightInKg = weight / 2.20462;
            const heightInCm = height * 2.54;
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
    };

    const calculateTDEE = () => {
        const activityMultipliers = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            extraActive: 1.9,
        };

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !unit || !gender || !activityLevel){
            setError({
                weight: isNaN(weight) || weight <= 0,
                height: isNaN(height) || height <= 0,
                age: isNaN(age) || age <= 0,
                unit: !unit,
                gender: !gender,
                activityLevel: !activityLevel,
            });
            return;
        };

        let bmrValue = null;
        if (unit === "imperial"){
            // Convert weight from lbs to kg and height from inches to cm
            const weightInKg = weight / 2.20462;
            const heightInCm = height * 2.54;
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
        if (bmrValue !== null){
            const tdeeValue = bmrValue * activityMultipliers[activityLevel];
            setTdee(tdeeValue.toFixed(2))
        }else {
            setTdee(null);
        }



    };

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
            setMessage("");
            setError({});
    };

    // CalulatorsContext value object
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
    };

    return (
        <CalculatorsContext.Provider value={contextValue}> 
            {children}
        </CalculatorsContext.Provider>
    )
};

export default CalculatorsContextProvider;

