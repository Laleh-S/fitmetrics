import { React, createContext } from "react";

const CalculatorContext = createContext();

function CalculatorContextProvider({ children }) {
  const contextValue = {};

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

export { CalculatorContextProvider, CalculatorContext };

