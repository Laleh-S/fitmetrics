// <Routes>: 
// used to ensure that only one route is matched and rendered at a time, even if multiple routes could potentially 
// match the current URL. 


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorContextProvider, } from './context/CalculatorContext';

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar';
import BMI from "./components/BMI"


function App() {
    return (
            <CalculatorContextProvider> 
                <Router>
                    <div className="flex flex-col h-screen"> {/* "h-scree" makes the main container take up the full height of the viewport */}
                        <Navbar />
                        <div className="flex flex-1"> {/* Flex container for sidebar and main content */}
                            <Sidebar />
                            <div className="flex-1 p-4"> 
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/bmi" element={<BMI />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </Router>
            </CalculatorContextProvider>
    );
}

export default App;




