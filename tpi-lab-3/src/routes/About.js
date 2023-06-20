import React from "react";
import NavBar from "../components/Navbar/NavBar";
import AboutPage from "../components/About/AboutPage";

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
    </div>
  );
};

export default About;
