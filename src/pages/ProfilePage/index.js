import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductList, Spinner } from "../../components";

import { Header, NavBar } from "../../layout";
import "./style.css";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    const navigateTo = useNavigate();

    useEffect(async () => {
        const response = await fetch(`${API_HOST}/users/${id}`);
        if(response.status === 200) {
            const json = await response.json();
            if(json.length){
                setUserInfo(json[0]);
            } else {
                window.alert("User no longer exists.");
                navigateTo("/products");
            }
        }
    }, []);

    useEffect(async () => {
        const response = await fetch(`${API_HOST}/users/${id}/products`);
        if(response.status === 200) {
            const json = await response.json();
            setProducts(json);
        }
    }, []);

    return (
        <>
        <Header />
        { !userInfo ? 
            <Spinner />
        :
            <main className="profilepage">
                <h1>{`${userInfo.username} (${userInfo.rating.toFixed(1)}⭐)`}</h1>
                <hr />
                <h2>{`${userInfo.username}'${userInfo.username.charAt(userInfo.length - 1) === 's' ? '' : 's'} Listed Items`}</h2>
                {products === null ? <h2>Loading...</h2> : <ProductList productData={products} />}
            </main>
        }
        <NavBar />
        </>
    );
};

export default ProfilePage;
