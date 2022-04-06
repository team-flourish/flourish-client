import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './style.css'
import '../style.css'

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passwrd, setPasswrd] = useState("");
    const [confPass, setConfPass] = useState("");

    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = !!(username && email && passwrd && confPass);
        isValid &&= (passwrd === confPass);
        console.log(`1`,username,`2`, email,`3`, passwrd,`4`, confPass)

        if(isValid){
            const reqBody = { username, email, passwrd };
            const response = await fetch(`${window.API_HOST}/register`, {
                method: "POST",
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(reqBody)
            });
            if(response.status === 201){
                console.log("signup successful");
                navigateTo("/login");
            } else {
                // api error
                console.log("api error");
            }
        } else {
            // invalid form
            console.log("missing fields");
        }
    };

    return (
        <>
            <form
                id="form-registration"
                className="make-me-flex-2"
                onSubmit={handleSubmit}
                aria-label="register"
            >
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=""
                        required
                        id="name"
                        className="input-sign-in-up"
                    />
                </div>
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        required
                        id="email"
                        className="input-sign-in-up"
                    />
                </div>
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="password">Create password</label>
                    <input
                        type="password"
                        name="passwrd"
                        value={passwrd}
                        onChange={(e) => setPasswrd(e.target.value)}
                        placeholder=""
                        required
                        id="password"
                        className="input-sign-in-up"
                    />
                </div>
                <div className="form-control">
                    <label className="sign-up-in-field-title" htmlFor="confirmPassword">Re-enter password</label>
                    <input
                        type="password"
                        value={confPass} 
                        onChange={(e) => setConfPass(e.target.value)}
                        placeholder=""
                        required
                        id="confirmPassword"
                        className="input-sign-in-up"
                    />
                </div>
                <input
                    type="submit"
                    className="sign-up-now-button"
                    value="Sign up"
                />
            </form>
        </>
    );
};

export default SignUpForm;
