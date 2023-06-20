import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { ThemeContext } from "../context/ThemeContext";
import "./ProductsCard.css";
import { useAuth } from "../context/authContext";

const ProductsCard = ({ name, price, id, imgUrl, unlistItem }) => {
  const { user } = useAuth();
  const [cart, setCart] = useContext(CartContext);
  const { isDarkMode } = useContext(ThemeContext);

  const addToCart = () => {
    setCart((currentItem) => {
      const isItemsFound = currentItem.find((item) => item.id === id);
      if (isItemsFound) {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItem, { id, name, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className={`productsCard ${isDarkMode ? "dark" : ""}`}>
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      {user != null && user.email === "prueba@prueba.com" && (
        <>
          <button onClick={() => unlistItem(id)}>Unlist Item</button>
        </>
      )}
      <div>{name}</div>
      <img src={imgUrl} alt="food" width="250" height="300" />
      <div>${price}</div>
      {quantityPerItem === 0 ? (
        <button className="productAddButton" onClick={() => addToCart()}>
          + add to cart
        </button>
      ) : (
        <button className="productPlusButton" onClick={() => addToCart()}>
          + add to more
        </button>
      )}
      {quantityPerItem > 0 && (
        <button className="productMinusButton" onClick={() => removeItem(id)}>
          subtract item
        </button>
      )}
    </div>
  );
};

export default ProductsCard;
