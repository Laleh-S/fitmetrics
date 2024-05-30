import { configureStore } from "@reduxjs/toolkit";
// import sharedReducer from './slices/sharedSlice';
import bmiReducer from "../slices/bmiSlice";


const rootReducer = {
//   shared: sharedReducer,
    bmi: bmiReducer,

  // Add other reducers as needed
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;