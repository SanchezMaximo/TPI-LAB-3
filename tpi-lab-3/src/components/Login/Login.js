import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";
//FALTA CONECTARLO A UN BACK END PARA HCER UNA VERIFICACION DE USUARIO
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailRef = useRef(null);
  const passRef = useRef(null);
  //TEXTOS DE ERROR (NO SE ENCUENTRA EL USUARIO) (FALTA HACER LA VERIFICACION DEL USUARIO)
  const notify = () => toast.error("Email Error");
  const notify2 = () => toast.error("Pass Error");
  const Bienvenida = () => toast.success("Datos correctos, bienvenido");
  //Handler de email en onChange
  const emailChangedHandler = (event) => {
    emailRef.current.style.borderColor = "";
    emailRef.current.style.outline = "";
    setEmail(event.target.value);
  };
  //Handler de password en onChange
  const passwordChangedHandler = (event) => {
    passRef.current.style.borderColor = "";
    passRef.current.style.outline = "";
    setPass(event.target.value);
  };
  //funcion activada por onClick que verifica que no este vacio y que el usuario + contra exista (FALTA VERIFICAICON DE USUARIO)
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

export default Login;
