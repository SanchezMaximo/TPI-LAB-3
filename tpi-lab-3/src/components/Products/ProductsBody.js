import React, { useContext, useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import storeProducts from "../data/products.json";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";
import CrudForm from "../Crud/CrudForm";

import "./ProductsBody.css";

const ProductsBody = () => {
  const [cart, setCart] = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

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

  const createData = (data) => {
    const updatedProducts = [...products, data];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const updateData = (data) => {
    const updatedProducts = products.map((product) =>
      product.id === data.id ? data : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

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
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <button
        onClick={() => {
          setProducts(storeProducts);
          localStorage.setItem("products", JSON.stringify(storeProducts));
        }}
      >
        DEVOLVER DEFAULT
      </button>

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
              product={product}
              setDataToEdit={setDataToEdit}
              unlistItem={unlistItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsBody;
