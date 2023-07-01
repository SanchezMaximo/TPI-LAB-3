import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";

const PickUpTime = ({ setPickupTime }) => {
  const [pickUpTime, setPickUpTime] = useState(null);
  const [cart, setCart, addTime, setAddTime] = useContext(CartContext);

  useEffect(() => {
    const currentTime = new Date();
    const modifiedTime = new Date(
      currentTime.getTime() + parseFloat(addTime) * 60000
    );
    console.log(addTime);
    setPickUpTime(modifiedTime);
    setPickupTime(modifiedTime);
  }, [addTime]);

  return (
    <div>Pick Up Time: {pickUpTime && pickUpTime.toLocaleTimeString()}</div>
  );
};

export default PickUpTime;
