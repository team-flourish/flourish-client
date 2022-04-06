import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Header, NavBar } from "../../layout";
import { FilterList, ProductList, Spinner } from "../../components";
import './style.css';

const ResultsPage = () => {
    const user = useSelector(state => state.user);
    const loading = useSelector(state => state.loading);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [categories, setCategories] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [position, setPosition] = useState(null);

    const navigateTo = useNavigate();

    // get categories
    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products/categories`);
        if(response.status === 200) {
            const data = await response.json();
            setCategories(data);
        }
    }, []);

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

    // get login state
    useEffect(() => {
        if(isLoggedIn === false){
            navigateTo("/");
        }
    }, [isLoggedIn]);

    const filteredProducts = selectedCategories.length ? products.filter(product => {
        return selectedCategories.includes(product.category_id);
    }) : products;

    return (
        <>
        <Header>
            <FilterList categoryData={categories} onSelection={setSelectedCategories} />
        </Header>
        { loading ? 
            <Spinner />
        :
            <main className="productspage">
                <ProductList 
                    categoryData={categories} 
                    productData={filteredProducts} 
                    currentPosition={position}
                />
            </main>
        }
        <NavBar />
        </>
    );
}

export default ResultsPage;
