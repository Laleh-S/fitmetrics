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
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Body Mass Index (BMI) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
                <p className="text-lg text-justify leading-relaxed mb-4">Body Mass Index (BMI) is a numerical value derived from a person's weight and height, used to assess whether they have a healthy body weight for a given height. 
                The BMI falls into different categories to help identify potential health risks associated with being underweight, overweight, or obese. </p>
                <ul className="text-lg ml-8 list-disc text-left leading-relaxed">
                    <li><span className="font-semibold">Below 18.5</span> - you're in the underweight range</li>
                    <li><span className="font-semibold">18.5 to 24.9</span> - you're in the healthy weight range</li>
                    <li><span className="font-semibold">25 to 29.9</span> - you're in the overweight range</li>
                    <li><span className="font-semibold">30 to 34.9</span> - you're in the obese range</li>
                    <li><span className="font-semibold">35 to 39.9</span> - you're in the severely obese range</li>
                    <li><span className="font-semibold">40 or above</span> - you're in the very severely obese range</li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md">
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
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
                > 
                    Calculate BMI
                </button>
                {bmi && (
                <div className="mt-6 text-center font-semibold">
                    <h2 className="text-lg ">Your BMI is: {bmi}</h2>
                    <p className={`mt-1 text-lg px-2 py-2 rounded ${bgColor}`}>{message}</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default BMI;

