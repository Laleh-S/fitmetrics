import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";


const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null); 
    
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/signin")
    };

    const handdleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handdlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    return (
        <div className="">
            <form className="" onSubmit={handleSubmit}>
                <h2>Registe for an account</h2>
                <label className="">
                    Email
                    <input
                        type="text"
                        placeholder="Email" 
                        value={email} 
                        onChange={handdleEmailChange}
                        className=""
                        required
                    />
                </label>
                <label className="">
                    Password
                    <input
                        type="text"
                        placeholder="Password" 
                        value={password} 
                        onChange={handdlePasswordChange}
                        className=""
                        required
                    />
                </label>
                <button type="submit" className="">Register</button>
            </form>
        </div>
    )
};

export default Register;