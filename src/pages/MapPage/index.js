import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Map } from "../../components";
import { Header, NavBar } from "../../layout";

import "./style.css";

const MapPage = () => {
    const userLocation = useSelector(state => state.location);
    const [products, setProducts] = useState([]);

    const mapCenter = {
        lat: userLocation[0], lng: userLocation[1]
    };

    // get products
    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products`);
        if(response.status === 200) {
            const data = await response.json();
            setProducts(data);
        } else {
            setProducts([]);
        }
    }, []);

    return (
        <>
            <Header />
            <main className="mappage">
                <Map center={mapCenter} productData={products} />
            </main>
            <NavBar />
        </>
    );
};

export default MapPage;
