import React, { useContext } from 'react'
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

  return (
    <>
      <NavBar />
      <div className="cartContainer">
      <div>Items in cart : {quantity}</div>
      <div>Total : ${totalPrice}</div>
      <button className="checkout" onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </>
  )
}

export default ShoppingCart  