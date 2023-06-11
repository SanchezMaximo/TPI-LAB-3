import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Login/Login.css";
//FALTA CONECTARLO A UN BACK END PARA HCER UNA VERIFICACION DE USUARIO
const SigIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailRef = useRef(null);
  const passRef = useRef(null);
  //NOTIFICACIONES DE ERROR
  const notify = () => toast.error("Email No puede estar vacio");
  const notify2 = () => toast.error("Password No puede estar vacio");
  const Bienvenida = () => toast.success("Los datos han sido registrados");
  //Handler de email que se activa con onChange
  const emailChangedHandler = (event) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(event.target.value);
  };
  //Handler de password que se activa con onChange
  const passwordChangedHandler = (event) => {
    passRef.current.style.borderColor = "";
    passRef.current.style.outline = "";
    setPass(event.target.value);
  };
  //Boton onClick que evalua errores, si no estan vacios (y futuramente verifica si existe el usuario) crea el usuario
  const signInClicked = () => {
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      notify();
      return;
    }

    if (pass.length === 0) {
      passRef.current.focus();
      passRef.current.style.borderColor = "red";
      passRef.current.style.outline = "none";
      notify2();
      return;
    }

    Bienvenida();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4>Bienvenido a Coffee Shop</h4>
        <div className="input-container">
          <input
            className="input-control"
            onChange={emailChangedHandler}
            placeholder="Email"
            type="email"
            value={email}
            ref={emailRef}
          />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            onChange={passwordChangedHandler}
            placeholder="Password"
            type="password"
            value={pass}
            ref={passRef}
          />
        </div>
        <ToastContainer
          position="top-left"
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
        <button className="signin-button" onClick={signInClicked} type="button">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default SigIn;
