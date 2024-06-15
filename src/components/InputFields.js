// InputFields.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setWeight,
    setHeight,
    setAge,
    setGender,
    setUnit,
    setActivityLevel,
} from "../store/slices/energyExpenditureSlice.js";

const InputFields = ({ showActivityLevel }) => { // showActivityLevel prop comes from bmr.js
    const dispatch = useDispatch();
    const { weight, height, age, gender, unit, activityLevel, error } = useSelector((state) => state.energyExpenditure);

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

    const handleUnitChange = (event) => {
        dispatch(setUnit(event.target.value));
    };

    const handleGenderChange = (event) => {
        dispatch(setGender(event.target.value));
    };

    const handleActivityLevelChange = (event) => {
        dispatch(setActivityLevel(event.target.value));
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                    <select
                        type="number"
                        name="unit"
                        value={unit || ""}
                        onChange={handleUnitChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        {/* <option value="">Choose Unit</option> */}
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
                        type="number"
                        name="gender"
                        value={gender || ""}
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
                        value={weight || ""}
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
            {showActivityLevel && (
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Activity Level
                    <select
                        value={activityLevel}
                        onChange={handleActivityLevelChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Choose Activity</option>
                        <option value="sedentary">Sedentary: little or no exercise</option>
                        <option value="lightlyActive">Exercise 1-3 times/week</option>
                        <option value="moderatelyActive">Exercise 4-5 times/week</option>
                        <option value="veryActive">Daily or intense exercise 3-4 times/week</option>
                        <option value="extraActive">Intense exercise 6-7 times/week</option>
                    </select>
                </label>
            </div> 
            )}
        </div>
    );
};

export default InputFields;
