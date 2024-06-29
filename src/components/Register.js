import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success
    
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register(email, password);
            setRegistrationSuccess(true);
        } catch (error) {
            setError(error.message);
        }
        console.log("Email submitted:", email);
    };

    const handdleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handdlePasswordChange = (event) => {
        setPassword(event.target.value)
    };



    return (
        <div className="">
            <form className="" onSubmit={handleSubmit}>
                <h2>Registe for an account</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {registrationSuccess && <p style={{ color: 'green' }}>Registration successful!</p>}
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