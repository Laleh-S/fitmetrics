
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoBlue from "../assets/logoBlue.png"
import logoYellow from "../assets/logoYellow.png"
import "../index.css"



function Navbar () {
    const { currentUser } = useContext(AuthContext);

    return (
        <nav className="bg-yellow  h-24 ">
            <div className="max-w-7xl mx-auto flex items-center h-full"> 
                <Link to="/" className=" text-yellow text-xl font-bold">
                    <img src={logoBlue} alt="Logo" className="w-40 "/>
                </Link> 
                <ul className="flex space-x-4 ml-auto bg-">
                    {/* <li className=""><Link to="/register" className="text-black">Register</Link></li> */}
                    {currentUser ? (
                    <li className=""><Link to="/profile" className="text-black">Profile</Link></li>
                    ) : (
                    <li className=""><Link to="/login" className="text-black">Login</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;