import React, { useContext, useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";
import { useAuth } from "../context/authContext";
import { db } from "../firebaseConfig";
import CrudForm from "../Crud/CrudForm";
import "./ProductsBody.css";
import { ThemeContext } from "../context/ThemeContext";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const ProductsBody = () => {
  const [cart, setCart, addTime, setAddTime] = useContext(CartContext);
  const productsRef = collection(db, "products");

  const [products, setProducts] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);
  const { user } = useAuth();

  const getProducts = async () => {
    const storedProducts = await getDocs(productsRef);
    setProducts(
      storedProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getProducts();
    console.log("hola");
    getProducts();
  }, []);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const createData = async (data) => {
    await addDoc(productsRef, {
      name: data.name,
      price: data.price,
      type: data.type,
      imgUrl: data.imgUrl,
    });
    getProducts();
    // data.id = Math.random();
    // const updatedProducts = [...products, data];
    // setProducts(updatedProducts);
    // localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const updateData = async (data) => {
    const prodDoc = doc(db, "products", data.id);
    const updatedProduct = {
      name: data.name,
      price: data.price,
      type: data.type,
      imgUrl: data.imgUrl,
    };

    await updateDoc(prodDoc, updatedProduct);
    getProducts();
  };

  const unlistItem = async (id) => {
    const prodDoc = doc(db, "products", id);
    await deleteDoc(prodDoc);
    getProducts();
  };

  const addtimeHandler = (e) => {
    setAddTime(e.target.value);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {user && user.email === "prueba@prueba.com" ? (
        <div>
          <div className="setdelay">
            <p>Order Delay: </p>
            <input type="number" value={addTime} onChange={addtimeHandler} />
          </div>
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            updatedProducts={products}
          />
        </div>
      ) : (
        <div></div>
      )}

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
