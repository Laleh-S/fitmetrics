import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const { logout, currentUser, setCurrentUser } = useContext(AuthContext);
    const [goodbyeMessage, setGoodbyeMessage] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLogout = async () => {
        try {
            setUserName(currentUser.displayName); // Store the user's name
            await logout();
            setGoodbyeMessage(true);
            setCurrentUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    if (goodbyeMessage) {
        return <div>Goodbye {userName}</div>;
    }


    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome, {currentUser.displayName}</p>
            <p>Email: {currentUser.email}</p>
            <p>User ID: {currentUser.uid}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
