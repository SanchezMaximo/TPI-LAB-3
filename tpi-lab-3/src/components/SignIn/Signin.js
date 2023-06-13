import React, { useState, useRef } from "react";
import { useAuth } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <h3 className="login-label">Email </h3>
        <input
          className="login-input"
          type="text"
          placeholder="example@example.as"
          name="email"
          value={email}
          onChange={emailChangedHandler}
        />
        <h3 className="login-label">Password </h3>
        <input
          className="login-input"
          type="password"
          placeholder="password"
          name="password"
          value={pass}
          onChange={passwordChangedHandler}
        />
        <button className="login-button">Sign Un</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SigIn;