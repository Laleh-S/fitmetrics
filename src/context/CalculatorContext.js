import { React, createContext,useState } from "react";

const CalculatorContext = createContext();

function CalculatorContextProvider({ children }) {
   // "" act as placeholder for form input. Stating the user hasn't input any value yet, when component first renders.
  // null indicates that the BMI value is not yet calculated or available.
  const [weight, setWeight] = useState(""); 
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);


  // Calculating BMI function
  const calculateBMI = () => {
    const heightToMeter = height / 100
    const bmiValue = weight / (heightToMeter * heightToMeter)
    setBmi(bmiValue)
};


  const contextValue = {
    weight, 
    setWeight,
    height, 
    setHeight,
    bmi, 
    setBmi,
    calculateBMI,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

export { CalculatorContextProvider, CalculatorContext };

