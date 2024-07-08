import React, { createContext, useState, useEffect } from "react";
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    updateProfile
    } from "firebase/auth";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();
// const auth = getAuth(app);

export const AuthContextProvider = ({ children }) => {
    // ensures the authenticated user's details are stored and accessible throughout the application.
    // initially to null as no user has logedin, if not null, displays user's name and welcome message.
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
    const register = async (username, email, password) => {
        try {
            // creates a new user with email and password using firebase authentication function.
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // holds the credentials for autenticated user
            await updateProfile(user, {displayName: username}); // updates the user's profile with the username

            // updates the currentUser state with the username. 
            // ...user means keep all existing user information, only add or update the displayName property."
            setCurrentUser({...user, displayName: username});
            
            return user;
        } catch (error) {
            setError(error.message);
        }
    };

    // ❈❈❈❈❈❈❈❈❈ LOGIN FUNCTION ❈❈❈❈❈❈❈❈❈❈  
    const login = async (email, password) => {
        try {
            // sigining in a user with email and password using firebase authentication function.
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user); // updates currentUser state
        } catch (error) {
            throw error
        }
    }

    // ❈❈❈❈❈❈❈❈❈ LOG OUT FUNCTION ❈❈❈❈❈❈❈❈❈❈ 
    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
        } catch (error) {
            setError(error.message);
        }
    };
    
    // Context's value object.
    const contextValue = {
        currentUser, 
        setCurrentUser,
        register, 
        login, 
        logout,
        loading,
        error,
        setError,
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


