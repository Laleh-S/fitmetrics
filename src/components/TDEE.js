import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTDEE, clearInputs } from "../store/slices/energyExpenditureSlice";
import SharedInputFields from "./SharedInputFields";

function TDEE () {
    const dispatch = useDispatch();
    const { tdee, message } = useSelector((state => state.energyExpenditure));
    console.log("TDEE in component:", tdee);

    const handleCalculateTDEE = () => {
        dispatch(calculateTDEE());
    };

    const handleClearInputs = () => {
        dispatch(clearInputs());
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
                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TDEE;
