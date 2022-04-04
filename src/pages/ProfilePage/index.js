import React from "react";
import ProductList from "../../components/ProductList";

import { Header, NavBar } from "../../layout";
import "./style.css";

const ProfilePage = () => {
    return (
        <>
        <Header />
        <main className="profilepage">
            <h1>Bojin (5)⭐</h1>
            <hr />
            <h2>Bojin's Listed Items</h2>
            <ProductList />
        </main>
        <NavBar />
        </>
    );
};

export default ProfilePage;