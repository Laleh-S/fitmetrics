import { React, createContext,useState, useReducer } from "react";

const CalculatorContext = createContext();

function CalculatorContextProvider({ children }) {
  // "" act as placeholder for form input. Stating the user hasn't input any value yet, when component first renders.
  // null indicates that the BMI value is not yet calculated or available.
  const [weight, setWeight] = useState(""); 
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  


  // ============================ 
  // BMI calculation function
  // ============================  
  const calculateBMI = () => {
  
    const heightToMeter = height / 100
    const bmiValue = weight / (heightToMeter * heightToMeter)
    // setBmi(bmiValue.toFixed(2))

    let bmiMessage = "";
    if (bmiValue < 18.5){
      bmiMessage = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9){
      bmiMessage = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9 ) {
      bmiMessage = "Overweight";
    } else {
      bmiMessage = "Obese";
    }
    
};

  const contextValue = {
    weight, 
    setWeight,
    height, 
    setHeight,
    bmi, 
    setBmi,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

export { CalculatorContextProvider, CalculatorContext };

