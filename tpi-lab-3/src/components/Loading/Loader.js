import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Loader.css";

const Loader = () => {
  const [dots, setDots] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <h2 className={isDarkMode ? "dark" : "light"}>Loading{dots}</h2>
    </div>
  );
};

export default Loader;
