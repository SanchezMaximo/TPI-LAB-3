import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import NavBar from "../Navbar/NavBar.js";

import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const totalPrice = cart.reduce((acum, current) => {
    return acum + current.quantity * current.price;
  }, 0);

  const name = cart.reduce((acum, current) => {
    if (quantity > 1) {
      return acum + " " + current.name;
    } else {
      return acum + current.name;
    }
  }, []);

  //para mostrar card
  const [show, setShow] = useState(false);

  const handleCheckout = () => {
    setShow(!show);
  };

  return (
    <>
      <NavBar />
      <div className="cartContainer">
        <div>Items in cart : {quantity}</div>
        <button className="checkout" onClick={handleCheckout}>
          Checkout
        </button>
        <div className={show ? "showCard" : "noShowCard"}></div>
        {quantity > 1 && show && (
          <div>
            <div>Products:</div>
            <br />
            <div className="productsCart">
              {cart.map((product) => (
                <p key={product.id}>{product.name}</p>
              ))}
            </div>
            <br />
            <div>Total : ${totalPrice}</div>
          </div>
        )}
        {quantity === 1 && show && (
          <div>
            <div>
              Product: <br />
              {name}
            </div>
            <br />
            <div>Total : ${totalPrice}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
