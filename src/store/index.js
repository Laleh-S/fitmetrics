import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "../store/slices/bmiSlice";
import energyExpenditureReducer from "../store/slices/energyExpenditureSlice";


const rootReducer = {
    bmi: bmiReducer,
    energyExpenditure: energyExpenditureReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;