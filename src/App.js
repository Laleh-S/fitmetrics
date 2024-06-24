// <Routes>: 
// used to ensure that only one route is matched and rendered at a time, even if multiple routes could potentially 
// match the current URL. 


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BMI from "./components/BMI";
import BMR from "./components/BMR";
import TDEE from "./components/TDEE";
import CalculatorsContextProvider from "./context/CalculatorsContext";

function App() {
    return (
        <CalculatorsContextProvider>
            <Router>
                <div className="flex flex-col h-screen"> {/* "h-scree" makes the main container take up the full height of the viewport */}
                    <Navbar />
                    <div className="flex flex-1"> 
                        <Sidebar />
                        <div className="flex-1 p-4"> 
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/bmi" element={<BMI />} />
                                <Route path="/bmr" element={<BMR />} />
                                <Route path="/tdee" element={<TDEE />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </CalculatorsContextProvider>
    );
}

export default App;




