import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "../store/slices/bmiSlice";
import bmrReducer from "../store/slices/bmrSlice";


const rootReducer = {
    bmi: bmiReducer,
    bmr: bmrReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;