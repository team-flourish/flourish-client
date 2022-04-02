import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage, SignUpPage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
