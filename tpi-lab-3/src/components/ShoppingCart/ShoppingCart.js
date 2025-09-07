import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { ThemeContext } from "../context/ThemeContext";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/authContext";
import "./ShoppingCart.css";
import PickUpTime from "../PickUpTime/PickUpTime";
import { ToastContainer, toast } from "react-toastify";
import { sendOrderConfirmation } from "../../services/email";

const ShoppingCart = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { user } = useAuth();
  const [pickupTime, setPickupTime] = useState(null);
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  }, 0);

  const totalPrice = cart.reduce((acum, current) => {
    return acum + current.quantity * current.price;
  }, 0);

  const handleCheckout = async () => {
    if (quantity === 0) {
      return toast.error("No items to buy");
    }
    if (!user || !user.email) {
      return toast.error("No user email found");
    }
    const userPurchasesRef = doc(db, "purchases", user.email);
    const userPurchasesDoc = await getDoc(userPurchasesRef);

    if (!userPurchasesDoc.exists()) {
      // Si el documento padre para el usuario no existe, créalo
      await setDoc(userPurchasesRef, {});
    }

    cart.forEach((element) => {
      addDoc(collection(userPurchasesRef, "userPurchases"), {
        name: element.name,
        price: element.price,
        quantity: element.quantity,
        time: pickupTime.toString(),
      });
      addDoc(collection(db, "purchases", "adminRecord", "usersPurchases"), {
        user: user.email,
        name: element.name,
        price: element.price,
        quantity: element.quantity,
        time: pickupTime.toString(),
      });
    });
    // Send confirmation email
    try {
      const orderSummary = cart
        .map(
          (p) => `- ${p.name} x ${p.quantity} (${p.price} c/u)`
        )
        .join("\n");
      const pickupTimeText = pickupTime ? pickupTime.toString() : "No especificado";
      const res = await sendOrderConfirmation({
        toEmail: user.email,
        orderSummary,
        pickupTimeText,
        totalPrice,
      });
      if (res && res.status === "skipped") {
        toast.warn("Pedido registrado. Email no configurado en este entorno.");
      } else {
        toast.success("¡Pedido recibido! Te enviamos un correo con instrucciones.");
      }
    } catch (err) {
      toast.error("No pudimos enviar el email. Intentá más tarde.");
    }
    toast.info("Thank you for your purchase!");
    setCart([]);
  };

  return (
    <div className={isDarkMode ? "cartContainerDark" : "cartContainerLight"}>
      <h5>Products in cart : {quantity}</h5>
      <button className="btn-checkout" onClick={handleCheckout}>
        Checkout
      </button>
      <div className={"showCard"}>
        {quantity === 0 && (
          <div className="noShowCard">
            <p>Opps! There are no products in the cart.</p>
          </div>
        )}

        {quantity >= 1 && (
          <div className={isDarkMode ? "showCheckDark" : "showCheckLight"}>
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
            <PickUpTime setPickupTime={setPickupTime} />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-center"
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

export default ShoppingCart;
