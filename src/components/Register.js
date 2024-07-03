import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Register = () => {
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    // const [error, setError] = useState(null);
    const [registrationSuccess, setRegistrationSuccess, error, setError] = useState(false); 
    
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await register(username, email, password); // Updated to include username
            setRegistrationSuccess(true);
            // Optionally, navigate to profile page after successful registration
            // navigate("/profile");
        } catch (error) {
            setError(error.message);
        }
        console.log("Registration submitted:", username, email);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    return (
        <div className="">
            <form className="" onSubmit={handleSubmit}>
                <h2>Register for an account</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {registrationSuccess && <p style={{ color: 'green' }}>Registration successful!</p>}
                <label className="">
                    Username
                    <input
                        type="text"
                        placeholder="Username" 
                        value={username} 
                        onChange={handleUsernameChange}
                        className=""
                        required
                    />
                </label>
                <label className="">
                    Email
                    <input
                        type="email"
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
                        className=""
                        required
                    />
                </label>
                <button type="submit" className="">Register</button>
            </form>
        </div>
    );
};

export default Register;