import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "../store/slices/bmiSlice";
import energyExpenditureSlice from "../store/slices/energyExpenditureSlice";


const rootReducer = {
    bmi: bmiReducer,
    energyExpenditure: energyExpenditureSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;