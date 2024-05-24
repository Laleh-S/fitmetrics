
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";


function Navbar () {

    return (
        <nav className="bg-gray-800 border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="text-white text-xl font-bold">Home</Link> 
            </div>
        </nav>
    );
};

export default Navbar;