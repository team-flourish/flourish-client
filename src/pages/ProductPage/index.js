import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Map, RateProduct, Spinner } from "../../components";
import { Header, NavBar } from "../../layout";

import { msToTime, haversine } from "../../utils";
import "./style.css";

const ProductPage = () => {
    const { id } = useParams();
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const position = useSelector(state => state.location);
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(0);

    useEffect(async () => {
        if(!position) return;
        const response = await fetch(`${API_HOST}/products/${id}`);
        if(response.status === 200) {
            const json = await response.json();
            setProduct({
                ...json,
                distance: haversine(
                    {
                        lat: position[0],
                        lng: position[1]
                    }, {
                        lat: json.latitude,
                        lng: json.longitude
                    }
                ),
                time: Date.now() - (new Date(json.date_time).getTime())
            });
        }
    }, [position]);

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

    console.log(product);

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
                    <h2 className="productPriceExpiry">{product.is_retail ? `£${product.price.toFixed(2)}` : `Expires on ${product.expiry}` }</h2>
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
