import React, { useContext } from "react";
import { CalculatorsContext } from "../context/CalculatorsContext";


function BMI () {
    const { 
        weight, setWeight,
        height, setHeight,
        unit, setUnit,
        bmi, setBmi,
        error, setError,
        message, setMessage,
        calculateBMI,
        clearInputs,
    } = useContext(CalculatorsContext);

    // Event handler for weight and height input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "weight") {
            setWeight(value);
            setError({ ...error, weight: false })
        } else if (name === "height") {
            setHeight(value);
            setError({ ...error, height: false })
        }
    };

    const handleCalculateBMI = () => {
        calculateBMI();
    };

    const handleUnitChange = (event) => {
        const value = (event.target.value)
        setUnit(value);
        if(value){
            setError({ ...error, unit: false })
        }
    };

    const handleClearInputs = () => {
        clearInputs();
    }

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
                The BMI falls into different categories to help identify potential health risks associated with being underweight, overweight, or obese.
                </p>
                <p>
                </p>
                <ul className="text-lg ml-8 list-disc text-left leading-relaxed">
                    <li><span className="font-semibold">Underweight</span> - BMI below 18.5</li>
                    <li><span className="font-semibold">Normal weight</span> - BMI between 18.5 to 24.9</li>
                    <li><span className="font-semibold">Overweight</span> - BMI between 25 to 29.9</li>
                    <li><span className="font-semibold">Obese</span> - BMI between 30 to 34.9</li>
                    <li><span className="font-semibold">Severely obese</span> - BMI between 35 to 39.9</li>
                    <li><span className="font-semibold">Very severely obese</span> - BMI 40 or above</li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <h2 className="text-xl font-semibold mb-4">Calculator Your BMI</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit
                        <select
                            value={unit}
                            onChange={handleUnitChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Choose Unit</option>
                            <option value="metric">Metric (kg, cm)</option>
                            <option value="imperial">Imperial (lbs, inches)</option>
                        </select>
                        {error?.unit && <div className="text-red-500 text-sm">Please choose unit</div>}
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
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 "
                > 
                    Calculate BMI
                </button>
                <button
                    onClick={handleClearInputs}
                    className="mt-4 w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Clear 
                </button>
                {bmi && ( // if bmi is truthy display the result and message otherwise donn't show the div.
                <div className="mt-6 text-center font-semibold">
                    <h2 className="text-lg">BMI = {bmi}</h2>
                    <div className="mt-1 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full mr-2 ${bgColor}`}></div>
                        <p className="text-lg text-center">{message}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default BMI;

