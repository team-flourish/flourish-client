import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ProductList = ({ categoryData, productData }) => {
    const msToTime = (duration) => {
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        let output = "";

        if(hours) output += `${hours} hour${hours === 1 ? "" : "s"} `;
        if(minutes) output += `${minutes} minute${minutes === 1 ? "" : "s"} `;
        if(seconds && minutes < 5) output += `${seconds} second${seconds === 1 ? "" : "s"}`;
      
        return output;
    };

    return (
        <section id="productsList">
            {productData.map((product) => {
                const age = msToTime(Date.now() - (new Date(product.date_time).getTime())) + " ago";
                const cat = categoryData.find(c => c.category_id === product.category_id);
                return (
                    <div key={product.product_id} className="productListItem">
                        <div className="productImage" style={{backgroundImage: `url('${product.image}')`}}></div>
                        <div className="productInfo">
                            <div>
                                <h2>{product.description}</h2>
                                <div
                                className="productCategory"
                                style={{backgroundColor: cat.color}}
                                >{cat.category_name}</div>
                            </div>
                                <span className="productLister">by: <Link to={`/user/${product.user_id}`}>{product.username}</Link> ({product.user_rating}⭐)</span>
                            <span className="productDistance">1 mile away</span>
                            <span className="productTime">{age}</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductList;
