import React from "react";
import { AddProduct } from '../../components'
import { Header, NavBar } from "../../layout";

const AddaProduct = () => {
    return (
    <>
      <Header />
      <main>
        <AddProduct/>
      </main>
      <NavBar />
    </>
    );
}

export default AddaProduct;
