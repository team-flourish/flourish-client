import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Header, NavBar } from "../../layout";
import { FilterList, ProductList, Spinner } from "../../components";
import './style.css';

const ResultsPage = () => {
    const categories = useSelector(state => state.categories);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([]);

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

    const filteredProducts = selectedCategories.length ? products.filter(product => {
        return selectedCategories.includes(product.category_id);
    }) : products;

    return (
        <>
        <Header>
            <FilterList categoryData={categories} onSelection={setSelectedCategories} />
        </Header>
        { !products.length ? 
            <Spinner />
        :
            <main className="productspage">
                <ProductList 
                    categoryData={categories} 
                    productData={filteredProducts}
                />
            </main>
        }
        <NavBar />
        </>
    );
}

export default ResultsPage;
