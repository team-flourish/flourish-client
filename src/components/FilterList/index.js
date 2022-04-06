import React, { useEffect, useState } from "react";

import { categories as categoriesFromFile } from "../../data";
import "./style.css";

const FilterList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products/categories`);
        if(response.status === 200) {
            const data = await response.json();
            setCategories(data);
        } else {
            setCategories(categoriesFromFile);
        }
    }, []);

    return (
        <>
        <h2 className="muted filterListTitle">Filter by food type</h2>
        <div id="filterList">
            {categories.map((category) => (
                <div 
                key={category.category_id} 
                data-id={category.category_id} 
                className="filterListItem" 
                style={{backgroundColor: category.color}}
                >
                    {category.category_name}
                </div>
            ))}
        </div>
        </>
    );
};

export default FilterList;
