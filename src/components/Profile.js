import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../services/firebase";

const db = getFirestore(app);

const Profile = () => {
    const { logout, currentUser } = useContext(AuthContext);
    const [userName, setUserName] = useState(""); // State to store user's name



    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome, {currentUser.email}</p>
            <p>User ID: {currentUser.uid}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;
