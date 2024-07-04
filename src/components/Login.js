import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    
    const { login, error, setError } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(email, password);
            setLoginSuccess(true);
            navigate("/profile");
        } catch (error) {
            setError(error.message);
        }
        console.log("Email submitted:", email);
    };

    const handdleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handdlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    return (
        <div className="">
            <form className="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {loginSuccess && <p style={{ color: 'green' }}>Login successful!</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
                <div>
                    Don't have an account? 
                    <Link to="/register" className="text-blue-500 font-bold"> Register now</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;