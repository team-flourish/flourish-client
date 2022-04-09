import React from "react";

import "./style.css";

const Header = ({ children }) => {
    return (
        <header>
            <div className="brand">
                <h1>FLOURISH</h1>
            </div>
            { children }
        </header>
    );
};

export default Header;
