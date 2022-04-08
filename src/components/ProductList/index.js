import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { categories as categoriesFromFile } from "../../data";
import { msToTime, haversine } from "../../utils";
import "./style.css";

const ProductList = ({ categoryData, productData }) => {
    const user = useSelector(state => state.user);

    categoryData ||= categoriesFromFile;
    productData ||= [];
    const currentPosition = useSelector(state => state.location);

    productData = productData.map(product => {
        return {
            ...product,
            distance: haversine({
                lat: currentPosition[0],
                lng: currentPosition[1]
            }, {
                lat: product.latitude,
                lng: product.longitude
            }
            ),
            time: Date.now() - (new Date(product.date_time).getTime())
        };
    });

    const filteredProducts = productData.filter(product => {
        return product.distance <= user.radius;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        return a.time - b.time;
    });

    return (
        <section id="productsList">
            {productData.length ? 
            sortedProducts.map((product) => {
                let age ;
                if (!msToTime(product.time)){
                    age = "Just posted"
                }
                else{

                age = msToTime(product.time) + " ago";}
                const cat = categoryData.find(c => c.category_id === product.category_id);
                return (
                    <div key={product.product_id} className="productListItem">
                        <div className="productImage" style={{backgroundImage: `url('${product.image}')`}}></div>
                        <div className="productInfo">
                            <div>
                                <h2><Link to={`/product/${product.product_id}`}>{product.description}</Link></h2>
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
            })
            :
            <h2>No items to show.</h2>
            }
        </section>
    );
};

export default ProductList;
