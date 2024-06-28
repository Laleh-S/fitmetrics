import React, {useContext} from "react";
import { CalculatorsContext } from "../context/CalculatorsContext"; 
import SharedInputFields from "./SharedInputFields";

function TDEE () {
    const { tdee, setTdee, calculateTDEE, clearInputs } = useContext(CalculatorsContext);
    // console.log("TDEE in component:", tdee);

    const handleCalculateTDEE = () => {
        calculateTDEE();
    };

    const handleClearInputs = () => {
        clearInputs();
    };

    return (
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Total Daily Energy Expenditure (TDEE) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
            <p className="text-lg text-justify leading-relaxed mb-4">
                    TDEE measures how many calories the body needs in a day to maintain its current weight, considering its activity level. 
                    A TDEE calculator is a tool that estimates this daily calorie requirement based on factors such as age, sex, weight, 
                    height, and activity level. These calculators are widely used for planning diets and fitness goals, providing individuals 
                    with a personalized estimate of their daily energy expenditure. Here is how it works:
                </p>
                <p className="text-lg text-justify leading-relaxed mb-4">
                    1. <span className="font-bold">Basic Metabolic Rate (BMR): </span>  This is the number of calories the body needs at 
                    rest to maintain basic physiological functions like breathing and circulation. Refer to the BMR page for details on 
                    Basic Metabolic Rate (BMR).
                </p>
                <p className="text-lg text-justify leading-relaxed mb-4">
                    2. <span className="font-bold">Activity Multiplier: </span> To estimate TDEE, the BMR is multiplied by an activity 
                    factor that represents the overall physical activity level:
                </p>
                <ul className="text-lg ml-8 list-disc text-left leading-relaxed">
                    <li><span className="font-semibold">Sedentary</span> (little or no exercise) - BMR x 1.2</li>
                    <li><span className="font-semibold">Lightly active</span> (moderate light exercise 1-3 times a week) - BMR x 1.375</li>
                    <li><span className="font-semibold">Moderately active </span>(exercise 3-5 times a week) - BMR x 1.55</li>
                    <li><span className="font-semibold">Very active</span> (hard exercise/sports 6-7 days a week) - BMR x 1.725</li>
                    <li><span className="font-semibold">Super active </span> (very hard exercise/sports & physical job or 2x training) - BMR x 1.9</li> <br/>
                </ul>
                <p className="text-lg text-justify leading-relaxed mb-4">
                    3. <span className="font-bold">TDEE Calculation: </span>
                    It's calculated by multiplying the BMR by the activity multiplier: <br/>
                    <span className="italic">TDEE = BMR x Activity Level </span>
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <h2 className="text-xl font-semibold mb-4">Calculate Your TDEE</h2>
                <SharedInputFields showActivityLevel={true} />
                <button 
                    onClick={handleCalculateTDEE} 
                    className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
                >
                    Calculate TDEE
                </button>
                <button
                    onClick={handleClearInputs}
                    className="mt-4 w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Clear 
                </button>
                {tdee && (
                    <div className="mt-4 text-center font-semibold">
                        <h2 className="text-lg font-semibold">TDEE = <span className="text-green-600">{tdee}</span> calories a day</h2>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TDEE;
