import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <aside className="">
            <div className="">
                <h2 className="">Calculators</h2>
                <ul>
                    <li><Link to="/bmi" className="">BMI Calculator</Link></li>
                    <li><Link to="/vo2max" className="">VO2max Calculator</Link></li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;