
import React from "react";
import { Link } from "react-router-dom";
import logoBlue from "../assets/logoBlue.png"
import logoYellow from "../assets/logoYellow.png"
import "../index.css"

function Navbar () {

    return (
        <nav className="bg-yellow  h-24 ">
            <div className="max-w-7xl mx-auto flex items-center h-full"> 
                <Link to="/" className=" text-yellow text-xl font-bold">
                    <img src={logoBlue} alt="Logo" className="w-40 "/>
                </Link> 
                <ul>
                    <li className=""><Link to="/register" className="text-black">Register</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;