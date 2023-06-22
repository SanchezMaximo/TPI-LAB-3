import React, { useState, useRef } from "react";
import { useAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.css"
import "../SignIn/Signin.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setPass(event.target.value);
  };

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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
      <div className="loginRegistration">
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
