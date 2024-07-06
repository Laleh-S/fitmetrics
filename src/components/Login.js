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
        <div className="flex flex-wrap items-center mt-12 px-4">
            <div className="w-full md:w-1/2 max-w-lg mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-md bg-grey">
                <form className="" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Login into your account</h2>
                    {loginSuccess && <p style={{ color: 'green' }}>Login successful!</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="mb-4">
                        <label className="">
                            Email
                            <input
                                type="text"
                                placeholder="Email" 
                                value={email} 
                                onChange={handdleEmailChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <div  className="mb-4">
                        <label className="mb-4">
                            Password
                            <input
                                type="password"
                                placeholder="Password" 
                                value={password} 
                                onChange={handdlePasswordChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300">Login</button>
                    <div className="mt-5 text-center ">
                        Don't have an account? 
                        <Link to="/register" className="text-blue-500 font-bold"> Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;