import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
    const [loading, setLoading] = useState(false);

    const navigateTo = useNavigate();

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
    
    const handleDelete = async (e) => {
        setLoading(true);
        const token = window.localStorage.getItem('access_token');
        if(token) {
            const response = await fetch(`${API_HOST}/products/${id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
                })
            });
            if(response.status === 204){
                navigateTo(`/user/${user.id}`);
            } else {
                window.alert("Could not delete item.");
            }
        } else {
            window.alert("You are not logged in.");
            window.location.reload();
        }
        setLoading(false);
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
        {(!product || loading) ? <Spinner /> : 
        <main className="productpage">
            <section>
                <div id="productImage" style={{backgroundImage: `url('${product.image}')`}}></div>
                <div id="productInfo">
                    <div className="flex-row space-between margin-b">
                        {(product.user_id === user.id) ?
                            <input 
                                className="delete-button" 
                                type="submit" 
                                value="Delete"
                                onClick={handleDelete}
                            />
                        :
                            <RateProduct value={rating} onChange={handleRating} />
                        }
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
                    <span id="productTime">{`${msToTime(product.time)}`}</span>
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
