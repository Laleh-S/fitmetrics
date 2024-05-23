import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Finds the HTML element with the ID "root" and injects our react app into the html page.
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( // tells React to render our app inside the root element. 
    <React.StrictMode>
    <App />
    </React.StrictMode>
);