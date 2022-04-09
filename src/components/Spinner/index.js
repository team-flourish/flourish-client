import React from "react";

import "./style.css";

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <svg data-testid="svg-spinner" className="spinner" viewBox="0 0 50 50">
                <circle 
                className="path" 
                cx="25" cy="25" r="20" 
                fill="none" 
                strokeWidth="3"
                ></circle>
            </svg>
        </div>
    );
};

export default Spinner;
