import React from "react";

import { Header, NavBar } from "../../layout";

import './style.css';

const handleSubmit = () => {
    alert("A button clicked!");
  }

// const [formData, setFormData] = useState({ username: "", password: "" });

// const handleInput = (e) => {
//     setError();
//     return setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

const UserSettings = () => {
    return (
        <>
        <Header />
        <main  className="make-me-flex-3">

        <div style={{height:'5vh'}}> </div>
            <form
                id="change-location"
                onSubmit={handleSubmit}
                aria-label="change-location"  
            > 
                <input
                type="submit"
                className="user-settings-button"
                value="change location"
                />
            </form>

            <form
                id="cahnge-radius"
                onSubmit={handleSubmit}
                aria-label="change-radius"  
            > 
                <input
                type="submit"
                className="user-settings-button"
                value="change radius"
                />
            </form>

            <form
                id="edit-my-products"
                onSubmit={handleSubmit}
                aria-label="edit-my-products"  
            > 
                <input
                type="submit"
                className="user-settings-button"
                value="edit products"
                />
            </form>

        <div style={{height:'25vh'}}> </div>

            <form
                id="view-details"
                onSubmit={handleSubmit}
                aria-label="view-details"  
            > 
                <input
                type="submit"
                className="user-settings-button"
                value="view details"
                />
            </form>

            <form
                id="delete account"
                onSubmit={handleSubmit}
                aria-label="delete-account"  
            > 
                <input
                type="submit"
                className="user-settings-button"
                style={{backgroundColor: 'firebrick'}}
                value="delete account"
                />
            </form>

            {/* {error && (
                <div className="pb-4 text-center" id="error">
                {error}
                </div>
            )}
            {loading && (
                <div className="pb-4 text-center" id="loading">
                Logging in . . .
                </div>
            )} */}
        <div style={{height:'200px'}}> </div>
        </main>
        <NavBar />
        </>
    );
};

export default UserSettings;
