import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { ThemeContext } from "../context/ThemeContext";
import "./ProductsCard.css";
import { useAuth } from "../context/authContext";

const ProductsCard = ({
  name,
  price,
  id,
  imgUrl,
  unlistItem,
  product,
  setDataToEdit,
}) => {
  const { user } = useAuth();
  const [cart, setCart] = useContext(CartContext);
  const { isDarkMode } = useContext(ThemeContext);

  const addToCart = () => {
    setCart((currentItem) => {
      const isItemsFound = currentItem.find((item) => item.id === id);
      //Logica para agregar items que ya se encuentran en carro
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
         //si el item.id es igual al id que le pasamos por parametro se extrae la propiedad .quantity y si es igual a 1 se filtra y se borra 
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
    //busca cuantos elementos fueron seleccionados con respecto a un solo producto
    //si retorna un valor se extrae la cantidad y si no es cero
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div
      id="ProductCard"
      className={`productsCard ${isDarkMode ? "dark" : ""}`}
    >
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      {user != null && user.email === "admin@admin.com" && (
        <>
          <button
            className="productDeleteButton"
            onClick={() => unlistItem(id)}
          >
            Unlist Item
          </button>
          <br></br>

          <button
            className="productEditButton"
            onClick={() => setDataToEdit(product)}
          >
            edit product
          </button>
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
