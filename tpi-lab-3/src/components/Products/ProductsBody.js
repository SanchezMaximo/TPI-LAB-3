import React, { useContext } from "react";

import "./ProductsBody.css";
import { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import storeProducts from "../data/products.json";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

const ProductsBody = () => {
  const [cart, setCart] = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(storeProducts);
    }
  }, []);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const unlistItem = (id) => {
    setProducts((currentProducts) => {
      const updatedProducts = currentProducts.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <div>
      <div className="cartItems">
        <Link to={"/cart"} className="linkCart">
          Cart items: <span className="cartCount">{quantity}</span>
        </Link>
      </div>
      <div className="productsList">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              {...product}
              unlistItem={unlistItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsBody;
