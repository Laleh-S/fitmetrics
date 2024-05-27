
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "../assets/logoBlue.png"
import logoYellow from "../assets/logoYellow.png"
import Home from "./Home";
import "../index.css"

function Navbar () {

    return (
        <nav className="bg-primary  h-24">
            <div className=" max-w-7xl mx-auto "> 
            <Link to="/" className=" text-yellow text-xl font-bold">
                <img src={logoYellow} alt="Logo" className="w-40 pt-4"/>
            </Link> 
            </div>
        </nav>
    );
};

export default Navbar;