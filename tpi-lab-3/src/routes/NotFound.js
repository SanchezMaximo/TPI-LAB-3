import React from 'react';
import { useNavigate } from "react-router-dom";
import "./NotFound.css"
import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

const NotFound = () => {
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? "notFoundDark" : "notFound"}>
        <h2>The page is not available.</h2>
        <button className={isDarkMode ? "btnNotFoundDark" : "btnNotFound"} onClick={() => navigate("/")}>
        Back to home
        </button>
    </div>
  )
}

export default NotFound
