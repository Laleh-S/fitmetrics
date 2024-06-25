// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA21XJ26UdmQAvevJdvag-hobHwz_c_gGo",
    authDomain: "fitmetrics-2e4b4.firebaseapp.com",
    projectId: "fitmetrics-2e4b4",
    storageBucket: "fitmetrics-2e4b4.appspot.com",
    messagingSenderId: "37817796450",
    appId: "1:37817796450:web:a9468d66cc983965104e3b",
    measurementId: "G-Z039N3EQHP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }; 

