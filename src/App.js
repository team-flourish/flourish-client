import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage, SignUpPage, LogInPage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/login" element={<LogInPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
