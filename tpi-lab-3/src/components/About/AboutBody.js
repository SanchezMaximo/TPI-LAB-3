import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import "./AboutBody.css"; 


const AboutBody = () => {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div id='AboutBody' 
    className={`aboutBody ${isDarkMode ? "dark" : ""}`}>
    AboutBody
    </div>
  )
}

export default AboutBody