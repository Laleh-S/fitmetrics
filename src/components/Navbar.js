
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "../index.css"

function Navbar () {

    return (
        <nav className="bg-primary  h-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-yellow text-xl font-bold">FitMatrics</Link> 
            </div>
        </nav>
    );
};

export default Navbar;