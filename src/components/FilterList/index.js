import React from "react";

import { categories } from "../../data";
import "./style.css";

const FilterList = () => {
    return (
        <>
        <h2 className="muted filterListTitle">Filter by food type</h2>
        <div id="filterList">
            {categories.map((category, index) => (
                <div 
                key={category.label} 
                data-id={index + 1} 
                className="filterListItem" 
                style={{backgroundColor: category.color}}
                >
                    {category.label}
                </div>
            ))}
        </div>
        </>
    );
};

export default FilterList;
