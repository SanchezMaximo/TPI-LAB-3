import React, { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartProvider';
import NavBar from '../Navbar/NavBar.js';

import "./ShoppingCart.css"

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  },0);

  const totalPrice = cart.reduce((acum, current) => {
    return acum + current.quantity * current.price;
  },0);

  const name = cart.reduce((acum, current) => {
    if(quantity > 1){
      return acum  + " " + current.name;
    } else {
      return acum + current.name;
    }
  },[]);

  //para mostrar card 
  const [show, setShow] = useState(false);

  const handleCheckout = () => {
    setShow(!show);
  };

  return (
    <>
      <NavBar />
      <div className="cartContainer">
      <div>Products: <p>{name}</p> </div>
      <div>Items in cart : {quantity}</div>
      <div>Total : ${totalPrice}</div>
      <button className="checkout" onClick={handleCheckout}>Checkout</button>
      {/* <div className={show ? "showCard" : "noShowCard"}>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>${totalPrice}</div>
      </div> */}
      </div>
    </>
  )
}

export default ShoppingCart  