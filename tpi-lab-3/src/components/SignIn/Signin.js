import React, { useState, useRef, useContext } from "react";
import { useAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SigIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setPass(event.target.value);
  };
  //valida el registro del usuario(Si existe, si contiene contraseña valida y email valido)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, pass);
      navigate("/");
    } catch (errors) {
      toast.error(errors.code);
    }
  };
  return (
    <div
      className={`${isDarkMode ? "dark signIn-container" : "signIn-container"}`}
    >
      <form
        id="formSignin"
        className={`${isDarkMode ? "dark signIn-form" : "signIn-form"}`}
        onSubmit={handleSubmit}
      >
        <h1>SIGN UP</h1>
        <h3 className="signIn-label">Email </h3>
        <input
          className="signIn-input"
          type="text"
          placeholder="example@example.as"
          name="email"
          value={email}
          onChange={emailChangedHandler}
        />
        <h3 className="signIn-label">Password </h3>
        <input
          className="signIn-input"
          type="password"
          placeholder="password"
          name="password"
          value={pass}
          onChange={passwordChangedHandler}
        />
        <button className="signIn-button">Sign In</button>
      </form>
      <div
        className={`${
          isDarkMode ? "dark signInRegistration" : "signInRegistration"
        }`}
      >
        <p>Already have an accout?</p>
        <Link to="/login">Click here to login</Link>
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

export default SigIn;
