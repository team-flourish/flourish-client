import React, { useState, useEffect } from "react";

import { Header, NavBar } from "../../layout";
import { FilterList, ProductList } from "../../components";
import { categories as categoriesFromFile } from "../../data";
import './style.css';

const ResultsPage = () => {
    const [categories, setCategories] = useState(categoriesFromFile);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products/categories`);
        if(response.status === 200) {
            const data = await response.json();
            setCategories(data);
        } else {
            setCategories(categoriesFromFile);
        }
    }, []);

    useEffect(async () => {
        const response = await fetch(`${API_HOST}/products`);
        if(response.status === 200) {
            const data = await response.json();
            setProducts(data);
        } else {
            setProducts([]);
        }
    }, []);

    const filteredProducts = selectedCategories.length ? products.filter(product => {
        return selectedCategories.includes(product.category_id);
    }) : products;

    return (
        <>
        <Header>
            <FilterList categoryData={categories} onSelection={setSelectedCategories} />
        </Header>
        <main className="productspage">
            <ProductList categoryData={categories} productData={filteredProducts} />
        </main>
        <NavBar />
        </>
    );
}

export default ResultsPage;
