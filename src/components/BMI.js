import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWeight, updateHeight, calculateBMI } from "../store/slices/bmiSlice";


function BMI () {
    const dispatch = useDispatch();
    const { weight, height, bmi, message, error } = useSelector((state) => state.bmi);

    // Event handler for weight and height input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "weight") {
            dispatch(updateWeight(value));
        } else if (name === "height") {
            dispatch(updateHeight(value));
        }
    };

    const handleCalculateBMI = () => {
        dispatch(calculateBMI());
    };

    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold mb-4">BMI Calculator</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                    <input 
                        type="number"
                        name="height"
                        value={height}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {/* The (?) is called optional chaining. It's a shorthand notation to avoid errors 
                    when accessing properties of null or undefined objects.*/}
                    {error?.height && <div className="text-red-500 text-sm">Please enter a valid height</div>}
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                    <input 
                        type="number"
                        name="weight"
                        value={weight}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    {error?.weight && <div className="text-red-500 text-sm">Please enter a valid weight</div>}
                </label>
            </div>
            <button 
                onClick={handleCalculateBMI}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            > 
                Calculate BMI
            </button>
            {bmi && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Your BMI is: {bmi}</h2>
                    <p className="mt-1 text-lg">{message}</p>
                </div>
            )}
        </div>
    );
};

export default BMI;

