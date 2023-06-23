import React, { useContext } from "react";
import AboutPage from "../components/About/AboutPage";
import { ThemeContext } from "../components/context/ThemeContext";
import "../components/context/theme.css";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <AboutPage
        aboutPageMid="aboutPageMid"
        imgClass="imgClass"
        aboutImg="img/coffee.jpg"
        title="About"
        subtitle="A humble beginning"
      />
    </div>
  );
};

export default About;
