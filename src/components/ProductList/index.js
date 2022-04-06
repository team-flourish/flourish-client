import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ProductList = ({ categoryData, productData, currentPosition }) => {
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

    const haversine = (A, B) => {
        const rad = (deg) => deg * Math.PI / 180;
        const R = 6371;
        const dX = rad(B.lat - A.lat);
        const dY = rad(B.lng - A.lng);
        A.lat = rad(A.lat);
        B.lat = rad(B.lat);

        const a = Math.pow(Math.sin(dX / 2), 2) + Math.pow(Math.sin(dY / 2), 2) * Math.cos(A.lat) * Math.cos(B.lat);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const position = currentPosition || {
        lat: 51.517673199104046, 
        lng: -0.1276473535731588
    };

    productData = productData.map(product => {
        return {
            ...product,
            distance: haversine(
                position, {
                    lat: product.latitude,
                    lng: product.longitude
                }
            ),
            time: Date.now() - (new Date(product.date_time).getTime())
        };
    });

    const sortedProducts = productData.sort((a, b) => {
        return a.time - b.time;
    });

    return (
        <section id="productsList">
            {sortedProducts.map((product) => {
                const age = msToTime(product.time) + " ago";
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
                            <span className="productDistance">{`${product.distance.toFixed(2)}km away`}</span>
                            <span className="productTime">{age}</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductList;
