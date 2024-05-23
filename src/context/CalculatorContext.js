import { React, createContext, useState } from "react";

export const CalculatorContext = createContext();

function CalculatorContextProvider ({ children }) {

    const contextValue = {

    }

    return (
        <CalculatorContextProvider value={contextValue}>
            {children}
        </CalculatorContextProvider>
    );

};

export default CalculatorContextProvider;