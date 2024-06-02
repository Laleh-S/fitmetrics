import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeight, setHeight, calculateBMI, setUnit } from "../store/slices/bmiSlice";


function BMI () {
    const dispatch = useDispatch();
    const { weight, height, bmi, message, error, unit } = useSelector((state) => state.bmi);

    // Event handler for weight and height input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "weight") {
            dispatch(setWeight(value));
        } else if (name === "height") {
            dispatch(setHeight(value));
        }
    };

    const handleCalculateBMI = () => {
        dispatch(calculateBMI());
    };

    const handleUnitChange = (event) => {
        dispatch(setUnit(event.target.value))
    };

    // Background color based on the BMI message
    let bgColor = "";

    if (message === "Underweight"){
        bgColor = "bg-blue-500"
    } else if (message === "Normal weight") {
        bgColor = "bg-green-500";
    } else if (message === "Overweight") {
        bgColor = "bg-yellow-500";
    } else if (message === "Obese") {
        bgColor = "bg-orange-500";
    } else if (message === "Severely Obese") {
        bgColor = "bg-red-500";
    } else if (message === "Very Severely Obese") {
        bgColor = "bg-red-700";
    }

    return (
        <div className="">
            <div className="max-w-lg mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Calculator Your BMI</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit
                        <select
                            value={unit}
                            onChange={handleUnitChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="metric">Metric (kg, cm)</option>
                            <option value="imperial">Imperial (lbs, inches)</option>
                        </select>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight ({unit === "metric" ? "kg" : "lbs"})
                        <input 
                            type="number"
                            name="weight"
                            value={weight}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {/* The (?) is called optional chaining. It's a shorthand notation to avoid errors 
                        when accessing properties of null or undefined objects.*/}
                        {error?.weight && <div className="text-red-500 text-sm">Please enter a valid weight</div>}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height ({unit === "metric" ? "cm" : "inches"})
                        <input 
                            type="number"
                            name="height"
                            value={height}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {error?.height && <div className="text-red-500 text-sm">Please enter a valid height</div>}
                    </label>
                </div>
                <button 
                    onClick={handleCalculateBMI}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                > 
                    Calculate BMI
                </button>
                {bmi && (
                <div className="mt-6 text-center font-semibold">
                    <h2 className="text-lg ">Your BMI is: {bmi}</h2>
                    <p className={`mt-1 text-lg px-2 py-2 rounded mx-20 ${bgColor}`}>{message}</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default BMI;

