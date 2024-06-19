import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateBMR, clearInputs } from "../store/slices/energyExpenditureSlice";
import SharedInputFields from "./SharedInputFields";


function BMR () {
    const dispatch = useDispatch();
    const { bmr, message, } = useSelector((state) => state.energyExpenditure);

    const handleCalculateBMR = () => {
        console.log("Calculate BMR button clicked");
        dispatch(calculateBMR());
    };

    const handleClearInputs = () => {
        // Clear all inputs or any other action 
        dispatch(clearInputs());
    };

    return (
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Basal Metabolic Rate (BMR) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
                <p className="text-lg text-justify leading-relaxed mb-4">
                    BMR refers to the minimum number of calories the body needs to maintain basic physiological functions such as 
                    breathing, circulating blood, and regulating body temperature while at rest.
                    
                    <br/> <br/> 
                    BMR is typically measured under very controlled conditions after a full night's sleep, in a fasted state 
                    (usually 12 hours without food), and in a thermoneutral environment (a temperature that does not require the
                    body to generate extra heat or cooling).
                    <br/><br/>
                    There are several formulas to calculate BMR, but two of the most commonly used are the Harris-Benedict equation 
                    and the Mifflin-St Jeor equation. Both formulas take into account factors such as age, gender, weight, and height.
                    <br/><br/>
                    Here we are using Mifflin-St Jeor Equation:
                    <br/><br/>
                    <span className="font-bold">For men: </span> BMR = (10 x Weight in kg) + (6.25 x Height in cm) - (5 x Age in years) + 5  
                    <br/>
                    <span className="font-bold">For women: </span> BMR = (10 x Weight in kg) + (6.25 x Height in cm) - (5 x Age in years) - 161
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <h2 className="text-xl font-semibold mb-4">Calculator Your BMR</h2>
                <SharedInputFields showActivityLevel={false} />
                <button 
                    onClick={handleCalculateBMR}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
                > 
                    Calculate BMR
                </button>
                <button
                    onClick={handleClearInputs}
                    className="mt-4 w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Clear 
                </button>
                {bmr && (
                <div className="mt-6 text-center font-semibold">
                    <h2 className="text-lg">BMR = <span className="text-green-600">{bmr}</span></h2>
                </div>
                )}
            </div>
        
        </div>
    );
};

export default BMR;