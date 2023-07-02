import React, { useState, useRef, useContext } from "react";
import { useAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import "../SignIn/Signin.css";
import { ThemeContext } from "../context/ThemeContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setPass(event.target.value);
  };
  //Manejo de login y sus errores
  //valida el registro del usuario(Si existe, si contiene contraseña valida y email valido)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, pass);
      navigate("/products");
    } catch (errors) {
      toast.error(errors.code);
    }
  };

  return (
    <div
      id="lgc"
      className={isDarkMode ? "dark login-container" : "login-container"}
    >
      <form
        id="formLogin"
        className={`${isDarkMode ? "dark login-form" : "login-form"}`}
        onSubmit={handleSubmit}
      >
        <h1>LOG IN</h1>
        <h3 className="login-label">Email </h3>
        <input
          type="text"
          className="login-input"
          placeholder="example@example.as"
          name="email"
          value={email}
          onChange={emailChangedHandler}
        />
        <h3 className="login-label">Password </h3>
        <input
          type="password"
          className="login-input"
          placeholder="password"
          name="password"
          value={pass}
          onChange={passwordChangedHandler}
        />
        <button className="login-button">Log In</button>
      </form>
      <div
        className={`${
          isDarkMode ? "dark loginRegistration" : "loginRegistration"
        }`}
      >
        <p>Don't have an account?</p>
        <Link to="/signup">Click here to Sign Up</Link>
      </div>
      <ToastContainer
        position="top-right"
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
export default LogIn;
