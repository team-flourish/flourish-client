import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../images/icons/home.svg";
import MapIcon from "../../images/icons/map.svg";
import AddIcon from "../../images/icons/add.svg";
import UserIcon from "../../images/icons/user.svg";
import './index.css';

const ResultsPage = () => {
    return (
        <>
        <header>
            <div className="brand">
                <h1>FLOURISH</h1>
            </div>
            <h2 className="muted">Filter by food type</h2>
            <div id="filterList">
                <div className="filterListItem" style={{backgroundColor: '#37D02A'}}>Veg</div>
                <div className="filterListItem" style={{backgroundColor: '#D02A66'}}>Fruit</div>
                <div className="filterListItem" style={{backgroundColor: '#FF3E3E'}}>Meat</div>
                <div className="filterListItem" style={{backgroundColor: '#CBBC95'}}>Dairy</div>
                <div className="filterListItem" style={{backgroundColor: '#FFBC0F'}}>Eggs</div>
                <div className="filterListItem" style={{backgroundColor: '#2AD0D0'}}>Fish</div>
            </div>
        </header>
        <main>
            <section id="productsList">
                <div className="productListItem">
                    <div className="productImage" style={{backgroundImage: `url('http://placehold.jp/160x160.png')`}}></div>
                    <div className="productInfo">
                        <div>
                            <h2>King Prawns</h2>
                            <div class="productCategory">Veg</div>
                        </div>
                        <span className="productLister">Posted by: Bojin (5) ⭐</span>
                        <span className="productDistance">1 mile away</span>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <nav>
                <Link to="/products"><img src={HomeIcon}/></Link>
                <Link to="map"><img src={MapIcon}/></Link>
                <Link to="/new"><img src={AddIcon}/></Link>
                <Link to="/profile"><img src={UserIcon}/></Link>
            </nav>
        </footer>
        </>
    );
}

export default ResultsPage;
