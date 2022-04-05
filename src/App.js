import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage, SignUpPage, LogInPage, AddaProduct, ResultsPage, ProductPage, UserSettings } from "./pages";
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<MainPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/login" element={<LogInPage />}/>
                    <Route path="/new" element={<AddaProduct />}/>
                    <Route path="/products" element={<ResultsPage />}/>
                    <Route path="/user" element={<ProfilePage />}/>
                    <Route path="/product" element={<ProductPage />}/>
                    <Route path="/settings" element={<UserSettings />}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
