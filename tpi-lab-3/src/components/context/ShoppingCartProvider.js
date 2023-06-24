import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addTime, setAddTime] = useState(15);

  return (
    <CartContext.Provider value={[cart, setCart, addTime, setAddTime]}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
