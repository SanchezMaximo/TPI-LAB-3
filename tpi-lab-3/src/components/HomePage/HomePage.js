import React from "react";
import "./HomePage.css";
import "../context/theme.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={props.homePage}>
      <img alt="coffeShop" src={props.homeImg} className={props.imgClass} />
      <div
        className={isDarkMode ? "homePage-text-dark" : "homePage-text-light"}
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HomePage;
