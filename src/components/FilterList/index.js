import React, { useState } from "react";

import { categories as categoriesFromFile } from "../../data";
import "./style.css";

const FilterList = ({ onSelection, categoryData }) => {
    const [selected, setSelected] = useState([]);

    categoryData ||= categoriesFromFile;

    const handleClick = (e) => {
        const value = parseInt(e.target.dataset.id);
        const index = selected.indexOf(value);
        let newSelected;
        if(index > -1){
            newSelected = [...selected.slice(0, index), ...selected.slice(index + 1)];
        } else {
            newSelected = [...selected, value];
        }
        setSelected(newSelected);
        onSelection && onSelection(newSelected);
    };

    return (
        <>
        <h2 className="filterListTitle">Filter by food type(s)</h2>
        <div id="filterList">
            {categoryData.map((category) => {
                const isSelected = selected.includes(category.category_id);
                const style = {
                    backgroundColor: category.color,
                    border: isSelected ? "2px solid black" : "2px solid #0000"
                };
                return (
                    <div 
                    key={category.category_id} 
                    data-id={category.category_id} 
                    className="filterListItem" 
                    style={style}
                    onClick={handleClick} 
                    >
                        {category.category_name}
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default FilterList;
