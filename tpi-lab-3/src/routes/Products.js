import React from "react";
import NavBar from "../components/Navbar/NavBar";
import ProductsPage from "../components/Products/ProductsPage";
import ProductsBody from "../components/Products/ProductsBody";

const Products = () => {
  return (
    <div>
      <ProductsPage
        ProductsPageMid="ProductsPageMid"
        imgClass="imgClass"
        productsImg="https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        title="Products"
      />
      <ProductsBody />
    </div>
  );
};

export default Products;
