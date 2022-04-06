import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './style.css';
import '../style.css';

const LogInForm = () => {
    const [email, setEmail] = useState("");
    const [passwrd, setPasswrd] = useState("");

    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = !!(email && passwrd);
        if(isValid){
            const reqBody = {
                email, passwrd
            };
            const response = await fetch(`${API_HOST}/login`, {
                method: "POST",
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(reqBody)
            });
            if(response.status === 200){
                console.log("login successful");
                navigateTo("/products");
            } else {
                console.log("login failed");
            }
        } else {
            console.log("missing fields");
        }
    };

    return (
        <>
            <form
                id="form-login"
                className="make-me-flex-2"
                onSubmit={handleSubmit}
                aria-label="login-aria"
            >
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        id="email"
                        className="input-sign-in-up"
                    />
                </div>
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="email">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={passwrd}
                        onChange={(e) => { setPasswrd(e.target.value) }}
                        required
                        id="password"
                        className="input-sign-in-up"
                    />
                </div>
                <input
                    type="submit"
                    className="log-in-now-button"
                    value="Log in"
                />
            </form>
        </>
    );
};

export default LogInForm;
