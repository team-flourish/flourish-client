import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Map, RateProduct, Spinner } from "../../components";
import { Header, NavBar } from "../../layout";

import { categories as categoriesFromFile } from "../../data";
import { msToTime, haversine } from "../../utils";
import "./style.css";

const ProductPage = () => {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const [categories, setCategories] = useState(categoriesFromFile);
    const [product, setProduct] = useState(null);
    const [position, setPosition] = useState(null);

    // get categories
    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products/categories`);
        if(response.status === 200) {
            const data = await response.json();
            setCategories(data);
        }
    }, []);

    useEffect(async () => {
        if(!position) return;
        const response = await fetch(`${API_HOST}/products/${id}`);
        if(response.status === 200) {
            const json = await response.json();
            setProduct({
                ...json,
                distance: haversine(
                    position, {
                        lat: json.latitude,
                        lng: json.longitude
                    }
                ),
                time: Date.now() - (new Date(json.date_time).getTime())
            });
        }
    }, [position]);

    // get location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(location => {
            setPosition({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        }, () => {
            if(user){
                setPosition({
                    lat: user.location.latitude,
                    lng: user.location.longitude
                });
            } else {
                setPosition({
                    lat: 51.517673199104046, 
                    lng: -0.1276473535731588
                })
            }
        });
    }, [user]);

    let mapLocation = null;
    let category = categories[0];

    if(product){
        mapLocation = {
            lat: product.latitude,
            lng: product.longitude
        };
        category = categories.find(c => c.category_id === product.category_id);
    }

    return (
        <>
        <Header />
        {!product ? <Spinner /> : 
        <main className="productpage">
            <section>
                <div id="productImage" style={{backgroundImage: `url('${product.image}')`}}></div>
                <div id="productInfo">
                    <div className="flex-row space-between margin-b">
                        <RateProduct />
                        <div id="productLister">{`Posted by: ${product.username} (${product.user_rating}⭐)`}</div>
                    </div>
                    <div className="flex-row">
                        <h2>{product.description}</h2>
                        <div
                        className="productCategory"
                        style={{backgroundColor: category.color}}
                        >{category.category_name}</div>
                    </div>
                    <span id="productDistance">{`${product.distance.toFixed(2)}km away`}</span>
                    <span id="productTime">{`${msToTime(product.time)} ago`}</span>
                </div>
                <Map center={mapLocation} marker={mapLocation} />
            </section>
        </main>
        }
        <NavBar />
        </>
    );
};

export default ProductPage;
