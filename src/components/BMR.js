import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeight, setHeight, setAge, setGender, calculateBMR, setUnit } from "../store/slices/bmiSlice";

function BMR () {
    const dispatch = useDispatch();
    const { weight, height, age, gender, bmi, message, error, unit} = useSelector((state) => state.bmr)

    const handleInputChange = (event) => {
        
    };

    return (
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Basal Metabolic Rate (BMR) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
                <p className="text-lg text-justify leading-relaxed mb-4"> 
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Calculator Your BMR</h2>
                
            </div>
        </div>
    );
};

export default BMR;