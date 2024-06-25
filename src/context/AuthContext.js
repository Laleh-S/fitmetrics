import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { app } from "../services/firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // "true" indicates that the app is in the proccess of checking user authentication.
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);
    
    // ❈❈❈❈❈❈❈❈❈ REGISTER FUNCTION ❈❈❈❈❈❈❈❈❈❈ 
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // ❈❈❈❈❈❈❈❈❈ LOGIN FUNCTION ❈❈❈❈❈❈❈❈❈❈  
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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

    // The AuthProvider component shows its children only when the loading is done. This prevents displaying content 
    // that depends on authentication before it's ready.
    return (
        <AuthContext.Provider value={contextValue}>
            {loading && children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;