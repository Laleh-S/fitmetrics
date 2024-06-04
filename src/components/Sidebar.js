import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

// h-[calc(100vh-2rem)] calculates the height by taking the full height of the viewport (100vh) and subtracting 2rem from it. 
function Sidebar() {
    return (
        <aside className="h-full w-full max-w-[15rem] p-8 bg-primary">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-2xl text-yellow mt-8 ">Calculators</h1>
                <ul>
                    <li className=""><Link to="/bmi" className="text-yellow">BMI Calculator</Link></li>
                    <li className=""><Link to="/bmr" className="text-yellow">BMR Calculator</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;