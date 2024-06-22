import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice ({
    name: "user";
    initialState,
    reducers: {
        fetchUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchUseerSuccess(state, action){
            state.isLoading = false;
            state.userDetails = action.payload;
        },
        fetchUserFailure(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        updateUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        updateUserSuccess(state, action) {
            state.isLoading = false;
            state.userDetails = action.payload;
        },
        updateUserFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }

});
export default userSlice.reducer;
export const { fetchUserStart, fetchUseerSuccess, fetchUserFailure,updateUserStart, updateUserSuccess, updateUserFailure } = userSlice.actions;

