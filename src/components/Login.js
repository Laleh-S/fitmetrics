import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const { Login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/profile")
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
                <h2>Login</h2>
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
                <button type="submit" className="">Login</button>
            </form>
        </div>
    );
};

export default Login;