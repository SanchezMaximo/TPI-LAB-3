import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./PHCard.css";
import { useAuth } from "../context/authContext";

function PHCard({ name, price, quantity, time, userB }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { user, role } = useAuth();
  const trimmedTime = time.substring(0, time.indexOf("GMT") - 1);
  return (
    <div
      id="PurchasesCard"
      className={`purchasesCard ${isDarkMode ? "dark" : ""}`}
    >
      <div>Product: {name}</div>
      <div>Quantity: {quantity}</div>
      <div>Price Per Unit: ${price}</div>
      <div>Time: {trimmedTime}</div>
      {role === "admin" && <p>User: {userB}</p>}
    </div>
  );
}

export default PHCard;
