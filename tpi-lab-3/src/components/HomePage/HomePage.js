import React from "react";
import "./HomePage.css";
import "../context/theme.css";

const HomePage = (props) => {
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
      {/* <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Log Out</button> */}
    </div>
  );
};

export default HomePage;
