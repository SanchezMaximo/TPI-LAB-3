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
  getDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loading/Loader";

const ProductsBody = () => {
  const { user, role } = useAuth();
  const [cart, setCart, addTime, setAddTime] = useContext(CartContext);
  const productsRef = collection(db, "products");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);

  const getProducts = async () => {
    const storedProducts = await getDocs(productsRef);
    setProducts(
      storedProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //retorna la suma del acumulador + la cantidad de cada prodcuto
  // current.quantity es para acceder a la cantidad de cada producto
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

  const confirmUnlistItem = (id, name) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmation) {
      unlistItem(id);
    }
  };

  const unlistItem = async (id) => {
    const prodDoc = doc(db, "products", id);
    await deleteDoc(prodDoc);
    toast.success("Item Removed!");
    getProducts();
  };

  const addtimeHandler = (e) => {
    setAddTime(e.target.value);
    console.log(role);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      {user && role === "admin" ? (
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
          Cart items : <span className="cartCount">{quantity}</span>
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productsList">
          {products.map((product) => {
            return (
              <ProductsCard
                key={product.id}
                {...product}
                product={product}
                setDataToEdit={setDataToEdit}
                unlistItem={confirmUnlistItem}
              />
            );
          })}
        </div>
      )}
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
