
import React, { useContext } from "react";
import { CalculatorsContext } from "../context/CalculatorsContext";

const SharedInputFields = ({ showActivityLevel }) => { // showActivityLevel prop comes from bmr.js
    const {  
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
        } = useContext(CalculatorsContext)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "weight") {
            setWeight(value);
            setError({...error, weight: false }) 
        } else if (name === "height") {
            setHeight(value);
            setError({...error, height: false }) 
        } else if (name === "age") {
            setAge(value);
            setError({...error, age: false }) 
        }
    };

    const handleUnitChange = (event) => {
        const value = (event.target.value)
        setUnit(value);
        if(value){
            setError({ ...error, unit: false }) // ...error means all errors stay the same, just clear unit error.
        }
    };

    const handleGenderChange = (event) => {
        const value = (event.target.value);
        setGender(value);
        if(value){
            setError({...error, gender: false })
        }
    };

    const handleActivityLevelChange = (event) => {
        const value = (event.target.value);
        setActivityLevel(value);
        if (value){
            setError({...error, activityLevel: false}) 
        }
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                    <select
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
                    {error.unit && <div className="text-red-500 text-sm">Please choose unit</div>}
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                    <select
                        name="gender"
                        value={gender || ""}
                        onChange={handleGenderChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {error.gender && <div className="text-red-500 text-sm">Please choose gender</div>}
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
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
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
                        <option value="lightlyActive">Light exercise 1-3 times a week</option>
                        <option value="moderatelyActive">Moderate exercise 3-5 times a week</option>
                        <option value="veryActive">Intense exercise 6-7 times a week</option>
                        <option value="extraActive">Very intense exercise 6-7 times a week & physical job </option>
                    </select>
                    {error.activityLevel && <div className="text-red-500 text-sm">Please choose activity level</div>}
                </label>
            </div> 
            )}
        </div>
        
    );
};

export default SharedInputFields;
