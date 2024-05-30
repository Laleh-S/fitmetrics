
import React from "react";
import ReactDOM from "react-dom/client";  // Correctly import ReactDOM from react-dom/client
import { Provider } from 'react-redux';
import store from "./store/index";
import App from "./App";
import "./index.css"; 

// Finds the HTML element with the ID "root" and injects our react app into the html page.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( // tells React to render our app inside the root element. 
    <Provider store={store}>
        <App />
    </Provider>
);