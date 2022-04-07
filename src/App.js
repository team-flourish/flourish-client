import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MainPage, SignUpPage, LogInPage, AddaProduct, ResultsPage, ProductPage, UserSettings, MapPage } from "./pages";
import ProfilePage from './pages/ProfilePage';

import { useDispatch, useSelector } from "react-redux";
import { getCategories, getLocation, getLoginStatus } from "./actions";
import { Spinner } from './components';

function App() {
    window.API_HOST = "https://flourish-api.herokuapp.com";

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const location = useSelector(state => state.location);

    const dispatch = useDispatch();

    useEffect(() => {
        const access_token = window.localStorage.getItem('access_token');
        dispatch(getLoginStatus(access_token));
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        user && dispatch(getLocation(user));
    }, [user]);

    const loading = isLoggedIn === null || !(isLoggedIn && user && categories && location) && !(isLoggedIn === false);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Scrollbars style={{ width: "100vw", height: "100vh" }}
                // This will activate auto hide
                autoHide
                // Hide delay in ms
                autoHideTimeout={1000}
                // Duration for hide animation in ms.
                autoHideDuration={200}>
                    { loading ?
                        <Spinner />
                    :
                        <Routes>
                            <Route exact path="/" element={isLoggedIn ? <Navigate replace to="/products" /> : <MainPage />} />
                            <Route path="/signup" element={isLoggedIn ? <Navigate replace to="/products" /> : <SignUpPage />}/>
                            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/products" /> : <LogInPage />}/>
                            <Route path="/new" element={!isLoggedIn ? <Navigate replace to="/" /> : <AddaProduct />}/>
                            <Route path="/products" element={!isLoggedIn ? <Navigate replace to="/" /> : <ResultsPage />}/>
                            <Route path="/user/:id" element={!isLoggedIn ? <Navigate replace to="/" /> : <ProfilePage />}/>
                            <Route path="/product/:id" element={!isLoggedIn ? <Navigate replace to="/" /> : <ProductPage />}/>
                            <Route path="/settings" element={!isLoggedIn ? <Navigate replace to="/" /> : <UserSettings />}/>
                            <Route path="/map" element={!isLoggedIn ? <Navigate replace to="/" /> : <MapPage />}/>
                        </Routes>
                    }
                </Scrollbars>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
