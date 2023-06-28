import React from "react";
import HomePage from "../components/HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <HomePage
        homePage="homePage"
        imgClass="imgClass"
        homeImg="https://images.unsplash.com/photo-1561336635-c0e118ad72a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
        title="SPECIALTY COFFEE"
        text="We enjoy creating experiences"
        buttonText="Learn more "
        url="/about"
        btnClass="show"
      />
    </div>
  );
};

export default Home;
