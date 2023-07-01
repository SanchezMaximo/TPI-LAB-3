import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { ThemeContext } from "../context/ThemeContext";

import "./ShoppingCart.css";
import PickUpTime from "../PickUpTime/PickUpTime";

const ShoppingCart = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const totalPrice = cart.reduce((acum, current) => {
    return acum + current.quantity * current.price;
  }, 0);

  //para mostrar card
  const [show, setShow] = useState(false);

  const handleCheckout = () => {
    setShow(!show);
  };

  return (
    
      <div className={isDarkMode ? "cartContainerDark" : "cartContainerLight"}>
        <h5>Products in cart : {quantity}</h5>
        <button className="btn-checkout" onClick={handleCheckout}>
          Checkout
        </button>
        <div className={show ? "showCard" : "noShowCard"}>
          {quantity === 0 && show && (
            <div className="noShowCard">
              <p>Opps! There are no products in the cart.</p>
            </div>
          )}

          {quantity >= 1 && show && (
            <div className="showCheck">
              <div>
                {cart.map((product) => (
                  <p key={product.id}>
                    <b>{product.name}</b>
                    <br></br>
                    selected amount: {product.quantity}
                    <br></br>
                    price per unit: ${product.price}
                  </p>
                ))}
              </div>
              <div className="total">total : ${totalPrice}</div>
              <PickUpTime />
            </div>
          )}
        </div>
      </div>
  );
};

export default ShoppingCart;
