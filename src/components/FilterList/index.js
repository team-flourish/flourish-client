import React from "react";

import "./style.css";

const FilterList = () => {
    const categories = [
        { name: "Veg", color: "#37D02A" },
        { name: "Fruit", color: "#D02A66" },
        { name: "Meat", color: "#FF3E3E" },
        { name: "Dairy", color: "#CBBC95" },
        { name: "Eggs", color: "#FFBC0F" },
        { name: "Fish", color: "#2AD0D0" }
    ];

    return (
        <>
        <h2 className="muted">Filter by food type</h2>
        <div id="filterList">
            {categories.map(category => (
                <div 
                key={category.name} 
                className="filterListItem" 
                style={{backgroundColor: category.color}}
                >
                    {category.name}
                </div>
            ))}
        </div>
        </>
    );
};

export default FilterList;
