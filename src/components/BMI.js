import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";


function BMI () {
    const { weight, setWeight, height, setHeight, bmi, setBmi, calculateBMI, message, setMessage } = useContext(CalculatorContext);


    return (
        <div className="">
            <h1 className="">BMI Calculator</h1>
            <div className="">
                <label className="">
                    Height (cm)
                    <input 
                        number="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className=""
                    />
                </label>
            </div>
            <div>
                <label className="">
                    Weight (kg)
                    <input 
                        number="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className=""
                    />
                </label>
            </div>
            <button 
                onClick={calculateBMI}
                className=""
            > 
                calculate BMI </button>
                {bmi && (
                    <div className="">
                        <h2 className="">Your BMI is: {bmi}</h2>
                        <p className="">{message}</p>
                    </div>
                )}
        </div>
    );
};

export default BMI;

