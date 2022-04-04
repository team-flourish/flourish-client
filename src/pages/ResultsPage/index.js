import React from "react";

import { Header, NavBar } from "../../layout";
import { FilterList, ProductList } from "../../components";
import './style.css';

const ResultsPage = () => {
    return (
        <>
        <Header>
            <FilterList />
        </Header>
        <main>
            <ProductList />
        </main>
        <NavBar />
        </>
    );
}

export default ResultsPage;
