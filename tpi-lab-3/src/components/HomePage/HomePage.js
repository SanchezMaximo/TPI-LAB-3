import React from "react";
import "./HomePage.css";
import "../context/theme.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = (props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={props.homePage}>
      <img alt="coffeShop" src={props.homeImg} className={props.imgClass} />
      <div className="homePage-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={isDarkMode ? "showDark" : "show"}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default HomePage;
