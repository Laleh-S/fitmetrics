import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false, // indicates whether the user is authenticated.
    token: null, // Holds the authentication token if the user is authenticated, otherwise null.
    user: null, // Stores user information once authenticated, otherwise null.
    isLoading: false, // Indicates if a login request is in progress.
    error: null, //
};

const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) { // login doesn't depend on any data passed with the action to login. therefore no action parameter required.
            state.isLoading = true; //  login request is in progress. 
            state.error = null; // typically done at the beginning of an asynchronous operation (like a login request) to clear any previous error state.  
        },
        loginSuccess(state, action) {
            state.isLoading = false; // indicates that the login request has completed (whether successful or failed)
            state.isAuthenticated = true; // since login succeeded the auth is set to false
            state.token = action.payload.token; // action.payload instead of boolean value. because the token needs to store a specific string value for token.
            state.user = action.payload.user; // same as above the user needs user info such as name, password and etc.
        },
        loginFailure(state, action) {
            state.isLoading = false; // indicates that the login request has completed (whether successful or failed)
            state.isAuthenticated = false; // since login failed auth is set to false
            state.token = null; // null because the login attempt failed no vslid token or user
            state.user = null; 
            state.error = action.payload; // contains the error information that caused the login failure.
        },
        logout(state){ // logout doesn't depend on any data passed with the action to logout. therefore no action parameter required.
            state.isAuthenticated = false; // user no longer authenticated
            state.token = null; // clears any stored authentication token, ensuring that no valid token remains after logout.
            state.user = null; // removes any previous stored user info from the state.
        },
    },
});
export default authSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;