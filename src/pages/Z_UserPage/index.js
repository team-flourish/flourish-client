import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoginStatus } from "../../actions";
import { Spinner } from "../../components";

import { Header, NavBar } from "../../layout";

import './style.css';

const UserSettings = () => {
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleSubmit = new Function();

    const handleViewProfile = (e) => {
        e.preventDefault();
        navigateTo(`/user/${user.id}`);
    };

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(getLoginStatus());
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('refresh_token');
        navigateTo("/");
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        dispatch(getLoginStatus());
        const response = await fetch(`${API_HOST}/users/${user.id}`, {
            method: 'DELETE'
        });
        if(response.status !== 204) {
            window.alert("Account could not be deleted. Logging out instead...");
        }
        handleLogOut(e);
    };

    return (
        <>
        <Header />
        {!user ? 
            <Spinner />
        :    
            <main className="make-me-flex-3">
                <div style={{height:'5vh'}}> </div>
                    <form
                        id="change-location"
                        onSubmit={handleSubmit}
                        aria-label="Change location"  
                    > 
                        <input
                        type="submit"
                        className="user-settings-button"
                        value="change location"
                        />
                    </form>

                    <form
                        id="change-radius"
                        onSubmit={handleSubmit}
                        aria-label="Change radius"  
                    > 
                        <input
                        type="submit"
                        className="user-settings-button"
                        value="change radius"
                        />
                    </form>

                    <form
                        id="view-profile"
                        onSubmit={handleViewProfile}
                        aria-label="View Profile"  
                    > 
                        <input
                        type="submit"
                        className="user-settings-button"
                        value="view profile"
                        />
                    </form>

                <div style={{height:'25vh'}}> </div>

                    <form
                        id="log-out"
                        onSubmit={handleLogOut}
                        aria-label="Log out"  
                    > 
                        <input
                        type="submit"
                        className="user-settings-button"
                        value="log out"
                        />
                    </form>

                    <form
                        id="delete account"
                        onSubmit={handleDeleteAccount}
                        aria-label="Delete account"  
                    > 
                        <input
                        type="submit"
                        className="user-settings-button"
                        style={{backgroundColor: 'firebrick'}}
                        value="delete account"
                        />
                    </form>
                <div style={{height:'200px'}}> </div>
            </main>
        }
        <NavBar />
        </>
    );
};

export default UserSettings;
