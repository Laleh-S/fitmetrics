import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWeight, updateHeight, calculateBMI } from "../slices/bmiSlice";


function BMI () {
    const dispatch = useDispatch();
    const { weight, height, bmi, message } = useSelector((state) => state.bmi);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'height') {
            dispatch(updateHeight(parseInt(value)));
        } else if (name === 'weight') {
            dispatch(updateWeight(parseInt(value)));
        }
    };

    
    const handleCalculate = () => {
        dispatch(calculateBMI());
    };

    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
            <h1 className="">BMI Calculator</h1>
            <div className="block text-sm font-medium text-gray-700">
                <label className="font-medium text-gray-700">
                    Height (cm)
                    <input 
                        type="number"
                        name="height"
                        value={height}
                        onChange={handleInputChange}
                        className=""
                    />
                </label>
            </div>
            <div>
                <label className="">
                    Weight (kg)
                    <input 
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={handleInputChange}
                        className=""
                    />
                </label>
            </div>
            <button 
                onClick={handleCalculate}
                className=""
            > 
                calculate BMI </button>
                {bmi && (
                    <div className="">
                        <h2 className="">Your BMI is: {bmi}</h2>
                        <p className="mt-1 text-lg">{message}</p>
                    </div>
                )}
        </div>
    );
};

export default BMI;

