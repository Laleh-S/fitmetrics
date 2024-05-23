// <Routes>: 
// used to ensure that only one route is matched and rendered at a time, even if multiple routes could potentially 
// match the current URL. 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalculatorContextProvider from "./context/CalculatorContext";

import LandingPage from "./components/LandingPage"



function App () {
    return (
        <div className="App">
            {/* CalculatorContextProvider component wraps around other components and provide them with access to the CalculatorContext.*/}
            <CalculatorContextProvider> 
                <Router>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </Router>
            </CalculatorContextProvider>
        </div>
    );
};

export default App;