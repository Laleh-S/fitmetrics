import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

// h-[calc(100vh-2rem)] calculates the height by taking the full height of the viewport (100vh) and subtracting 2rem from it. 
function Sidebar() {
    return (
        <aside className="h-full w-full max-w-[15rem] p-4 bg-primary">
            <div className="">
                <h1 className="font-bold text-2xl text-yellow">Calculators</h1>
                <ul>
                    <li><Link to="/bmi" className="">BMI Calculator</Link></li>
                    <li><Link to="/vo2max" className="">VO2max Calculator</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;