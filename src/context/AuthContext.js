import React, { createContext, useState, useEffect } from "react";
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, getAuth, 
    updateProfile } from "firebase/auth";
import { app } from "../services/firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthContextProvider = ({ children }) => {
    // ensures the authenticated user's details are stored and accessible throughout the application.
    // initially to null as no loser has logedin, if not null, displays user's name and welcome message.
    const [currentUser, setCurrentUser] = useState(null); 

    // The loading state is initially true, meaning the app is still checking if the user is logged in or not.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []); // [] means this effect only runs once, when the component first renders on the page, and cleans up 
    // when the component is removed from the page.
    

    // ❈❈❈❈❈❈❈❈❈ REGISTER FUNCTION ❈❈❈❈❈❈❈❈❈❈ 
    const register = async (name, email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user; // Update user state upon successful registration
        } catch (error) {
            setError(error.message); // Handle registration errors
        }
    };

    // ❈❈❈❈❈❈❈❈❈ LOGIN FUNCTION ❈❈❈❈❈❈❈❈❈❈  
    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
        } catch (error) {
            throw error
        }
    }

    // ❈❈❈❈❈❈❈❈❈ LOG OUT FUNCTION ❈❈❈❈❈❈❈❈❈❈ 
    const logout = () => {
        return signOut(auth)
    }
    
    // Context's value object.
    const contextValue = {
        currentUser, 
        register, 
        login, 
        logout,
        loading
    };


    // the !loading && children indicates "render the children only when loading is false."
    // so the app's content is only displayed after the authentication check is complete.
    return (
        <AuthContext.Provider value={contextValue}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;