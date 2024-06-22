import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "../store/slices/bmiSlice";
import energyExpenditureReducer from "../store/slices/energyExpenditureSlice";
import authReducer from "../store/slices/authSlice"


const rootReducer = {
    bmi: bmiReducer,
    energyExpenditure: energyExpenditureReducer,
    auth: authReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;