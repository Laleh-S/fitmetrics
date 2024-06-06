import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeight, setHeight, setAge, setGender, calculateBMR, setUnit, setActivityLevel } from "../store/slices/bmrSlice";

function BMR () {
    const dispatch = useDispatch();
    const { weight, height, age, gender, bmr, message, error, unit, activityLevel, dailyCalories} = useSelector((state) => state.bmr)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "weight") {
            dispatch(setWeight(value));
        } else if (name === "height") {
            dispatch(setHeight(value));
        } else if (name === "age") {
            dispatch(setAge(value));
        }
    };

    const handleCalculateBMR = () => {
        dispatch(calculateBMR());
    };

    const handleUnitChange = (event) => {
        dispatch(setUnit(event.target.value))
    };

    const handleGenderChange = (event) => {
        dispatch(setGender(event.target.value));
    };

    const handleActivityLevelChange = (event) => {
        dispatch(setActivityLevel(event.target.value))
    }

    return (
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Basal Metabolic Rate (BMR) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
                <p className="text-lg text-justify leading-relaxed mb-4">
                    BMR refers to the minimum amount of energy the body needs to maintain basic physiological functions while completely 
                    inactive, such as breathing, circulating blood, and regulating body temperature.
                    <br/> <br/>
                    The BMR is measured under very restrictive conditions while awake. To obtain an accurate BMR measurement, the individual's 
                    sympathetic nervous system must be inactive, meaning they must be completely at rest. 
                    <br/><br/>
                    This calculation uses Mifflin-St Jeor Equation:
                    <br/><br/>
                    <span className="font-bold">For men: </span> BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5  
                    <br/>
                    <span className="font-bold">For women: </span> BMR = 10 * Weight + 6.25 * Height - 5 * Age - 161
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <h2 className="text-xl font-semibold mb-4">Calculator Your BMR</h2>
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
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                        <select
                            value={gender}
                            onChange={handleGenderChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Choose Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
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
                        {error.weight && <div className="text-red-500 text-sm">Please enter a valid weight</div>}
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
                        {error.height && <div className="text-red-500 text-sm">Please enter a valid height</div>}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age 
                        <input 
                            type="number"
                            name="age"
                            value={age}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {error.age && <div className="text-red-500 text-sm">Please enter a valid age</div>}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Activity Level
                        <select
                            value={activityLevel}
                            onChange={handleActivityLevelChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Choose Activigy Level</option>
                            <option value="sedentary">Sedentary: little or no exercise</option>
                            <option value="lightlyActive">Exercise 1-3 times/week</option>
                            <option value="moderatelyActive">Exercise 4-5 times/week</option>
                            <option value="veryActive">Daily or intense exercise 3-4 times/week</option>
                            <option value="extraActive">Intense exercise 6-7 times/week</option>
                        </select>
                    </label>
                </div>
                <button 
                    onClick={handleCalculateBMR}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
                > 
                    Calculate BMR
                </button>
                {bmr && (
                <div className="mt-6 text-center font-semibold">
                    <h2 className="text-lg ">Your BMR is: <span className="text-green-600">{bmr}</span></h2>
                    {dailyCalories &&
                        <p className="text-md ">Daily calories based on activity level <span className="font-bold text-red-900">{dailyCalories}</span></p>
                    }
                    <p className="mt-1 text-lg px-2 py-2 rounded">{message}</p>
                </div>
                )}
            </div>
        
        </div>
    );
};

export default BMR;