import React from "react";
import { Link } from "react-router-dom";

import { msToTime, haversine } from "../../utils";
import "./style.css";

const ProductList = ({ categoryData, productData, currentPosition }) => {
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
