import React, { useState, useRef } from "react";
import { useAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SigIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signup } = useAuth();
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
      await signup(email, pass);
      navigate("/");
    } catch (errors) {
      toast.error(errors.code);
    }
  };
  return (
    <div className="signIn-container">
      <form className="signIn-form" onSubmit={handleSubmit}>
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
      <div className="signInRegistration">
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
