import React from "react";
import { Header, NavBar } from "../../layout";

import "./style.css";

const ProductPage = () => {
    return (
        <>
        <Header />
        <main className="productpage">
            <section>
                <div id="productImage" style={{backgroundImage: `url('http://placehold.jp/396x396.png')`}}></div>
                <div id="productInfo">
                    <div className="flex-row space-between margin-b">
                        <div id="rateProduct">
                            <h3>Rate this listing:</h3>
                            <div className="ratingStars">⭐⭐⭐☆☆</div>
                        </div>
                        <div id="productLister">Posted by: Bojin (5)⭐</div>
                    </div>
                    <div className="flex-row">
                        <h2>Tomatoes</h2>
                        <div className="productCategory">Veg</div>
                    </div>
                    <span id="productDistance">1 mile away</span>
                </div>
                <div id="map" style={{backgroundImage: `url('http://placehold.jp/396x396.png')`}}></div>
            </section>
        </main>
        <NavBar />
        </>
    );
};

export default ProductPage;
