import React from "react";
import { Link } from "react-router-dom";
import { Brand } from "../../components";

import './index.css';

const ResultsPage = () => {
    return (
        <>
        <header>
            <h1>FLOURISH</h1>
        </header>
        <main>
            <h2 className="muted">Filter by food type</h2>
            <div id="filterList">
                <div className="filterListItem">Veg</div>
                <div className="filterListItem">Fruit</div>
                <div className="filterListItem">Meat</div>
                <div className="filterListItem">Dairy</div>
                <div className="filterListItem">Eggs</div>
                <div className="filterListItem">Bread</div>
            </div>
            <section id="productsList">
                <div className="productListItem">
                    <img className="productImage"/>
                    <div className="productInfo">
                        <h2>Tomatoes</h2>
                        <span className="productLister">Posted by: Bojin (5) ⭐</span>
                        <span className="productDistance">1 mile away</span>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <nav>
                <Link to="products">icon</Link>
                <Link to="products/map">icon</Link>
                <Link to="products/new">icon</Link>
                <Link to="profile">icon</Link>
            </nav>
        </footer>
        </>
    );
}

export default ResultsPage;
