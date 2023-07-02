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
import { ToastContainer, toast } from "react-toastify";

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
    toast.success("Item Created!");
    getProducts();
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
    toast.success("Item Updated!");
    getProducts();
  };

  const unlistItem = async (id) => {
    const prodDoc = doc(db, "products", id);
    await deleteDoc(prodDoc);
    toast.success("Item Removed!");
    getProducts();
  };

  const addtimeHandler = (e) => {
    setAddTime(e.target.value);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {user && user.email === "admin@admin.com" ? (
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProductsBody;
