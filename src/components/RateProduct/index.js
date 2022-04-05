import React, { useState } from "react";

import starIcon from "../../images/icons/star.svg";
import "./style.css";

const RateProduct = ({ onChange }) => {
    const [rating, setRating] = useState(0);
    const [actualRating, setActualRating] = useState(0);

    const handleStarHover = (e) => {
        setRating(parseInt(e.target.dataset.stars));
    };

    const handleStarUnhover = (e) => {
        setRating(0);
    };

    const handleClick = (e) => {
        const selectedRating = parseInt(e.target.dataset.stars);
        setActualRating(selectedRating);
        onChange && onChange(selectedRating);
    };

    let stars = [];
    for(let i = 0; i < 5; i++){
        const isFilled = i < (rating || actualRating);
        stars.push(
            <img 
                key={i} 
                src={starIcon} 
                className={isFilled ? "lit" : ""} 
                data-stars={i + 1} 
                onMouseEnter={handleStarHover} 
                onMouseOut={handleStarUnhover} 
                onClick={handleClick}
            />
        );
    }

    return (
        <div id="rateProduct">
            <h3>Rate this listing:</h3>
            <div className="ratingStars">
                {stars}
            </div>
        </div>
    );
};

export default RateProduct;
