import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    const [rating, setRating] = useState(0);

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

    useEffect(async () => {
        if(user){
            const response = await fetch(`${API_HOST}/ratings/users/${user.id}/products/${id}`)
            if(response.status === 200) {
                const json = await response.json();
                if(json.length){
                    setRating(json[0].rating);
                }
            }
        }
    }, [user]);

    const handleRating = async (rating) => {
        const reqBody = {
            user_id: user.id,
            product_id: product.product_id,
            rating
        };
        const response = await fetch(`${API_HOST}/rating/vote`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(reqBody)
        });
        if(response.status !== 201) {
            setRating(0);
        }
    };

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
                        <RateProduct value={rating} onChange={handleRating} />
                        <div id="productLister">Posted by: <Link to={`/user/${product.user_id}`}>{product.username}</Link>{` (${product.user_rating}⭐)`}</div>
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
