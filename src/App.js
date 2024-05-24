// <Routes>: 
// used to ensure that only one route is matched and rendered at a time, even if multiple routes could potentially 
// match the current URL. 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CalculatorContextProvider, } from './context/CalculatorContext';

import Home from "./components/Home";
import Navbar from "./components/Navbar"


function App () {
    return (
        <div className="App">
            {/* CalculatorContextProvider component wraps around other components and provide them with access to the CalculatorContext.*/}
            <CalculatorContextProvider> 
                <Router>
                    <Navbar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    </Navbar>
                </Router>
            </CalculatorContextProvider>
        </div>
    );
};

export default App;

