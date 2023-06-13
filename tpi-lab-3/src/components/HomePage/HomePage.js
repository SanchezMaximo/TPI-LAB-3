import React from "react";
import { useAuth } from "./context/authContext";

import "./HomePage.css";

const HomePage = (props) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={props.homePage}>
      <img alt="coffeShop" src={props.homeImg} className={props.imgClass} />
      <div className="homePage-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
      <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default HomePage;
