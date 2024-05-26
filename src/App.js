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
        <div className="">
            <CalculatorContextProvider> 
                <Router>
                    <Navbar />
                    <div className=""> {/* Use flex to arrange navbar and main content */}
                        <Sidebar />
                        <div className=""> {/* Use flex-1 to allow main content to take up remaining space */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/bmi" element={<BMI />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </CalculatorContextProvider>
        </div>
    );
}

export default App;




