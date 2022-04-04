import React from "react";

import "./style.css";

const ProductList = () => {
    return (
        <section id="productsList">
            <div className="productListItem">
                <div className="productImage" style={{backgroundImage: `url('http://placehold.jp/160x160.png')`}}></div>
                <div className="productInfo">
                    <div>
                        <h2>King Prawns</h2>
                        <div className="productCategory">Veg</div>
                    </div>
                    <span className="productLister">Posted by: Bojin (5) ⭐</span>
                    <span className="productDistance">1 mile away</span>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
