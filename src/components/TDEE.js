import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTDEE } from "../store/slices/energyExpenditureSlice";
import InputFields from "./InputFields";

function TDEE () {
    const dispatch = useDispatch();
    const { tdee, message } = useSelector((state => state.energyExpenditure));
    console.log("TDEE in component:", tdee);

    const handleCalculateTDEE = () => {
        console.log("Calculate TDEE button clicked");
        dispatch(calculateTDEE())
    };

    return (
        <div className="flex flex-wrap items-center mt-8 px-4">
            <h1 className="text-center py-4 text-3xl font-bold w-full m-8">Total Daily Energy Expenditure (TDEE) Calculator</h1>
            <div className="w-full md:w-1/2 p-4  md:pl-16">
                <p className="text-lg text-justify leading-relaxed mb-4">
                    BMR refers to the minimum amount of energy the body needs to maintain basic physiological functions while completely inactive, such as breathing, circulating blood, and regulating body temperature.
                </p>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <h2 className="text-xl font-semibold mb-4">Calculate Your TDEE</h2>
                <InputFields showActivityLevel={true} />
                <button 
                    onClick={handleCalculateTDEE} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Calculate TDEE
                </button>
                
                {tdee && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Your TDEE is: {tdee} calories/day</h2>
                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TDEE;
