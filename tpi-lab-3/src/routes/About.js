import React, { useContext } from "react";
import AboutPage from "../components/About/AboutPage";
import { ThemeContext } from "../components/context/ThemeContext";
import "../components/context/theme.css";
import AboutBody from "../components/About/AboutBody";

const About = () => {
  return (
    <div>
      <AboutPage
        aboutPageMid="aboutPageMid"
        imgClass="imgClass"
        aboutImg="img/coffee.jpg"
        title="About"
        subtitle="A humble beginning"
      />
      <AboutBody />
    </div>
  );
};

export default About;
