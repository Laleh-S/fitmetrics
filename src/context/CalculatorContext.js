import { React, createContext, useState } from "react";

export const CalculatorContext = createContext();

function CalculatorContextProvider ({ children }) {

    const contextValue = {

    }

    return (
        <CalculatorContext.Provider value={contextValue}>
            {children}
        </CalculatorContext.Provider>
    );

};

export default CalculatorContextProvider;