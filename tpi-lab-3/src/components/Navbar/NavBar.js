import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout, user, username } = useAuth();
  //arrow function para cambiar el estado del navbar
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <nav>
        <a href="/">
          <img src="./img/logo.png" alt="coffee-mug " width={60} height={60} />
        </a>
        <div>
          {/* si el collapsed es true muestra el navbar mobile */}
          <ul id="navbar" className={collapsed ? "#navbar active" : "#navbar"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index + item}>
                  <Link to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            {user != null ? (
              <>
                <p>
                  Welcome
                  <br /> {username}
                </p>
                <button className="buttonLogout" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <div>
                <li
                  className="buttonLogout fa-solid fa-right-to-bracket"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </li>
                <li
                  className="buttonLogout fa-solid fa-right-to-bracket"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </li>
              </div>
            )}
          </ul>
        </div>
        {/* cambio de logo del navbar */}
        <div id="mobile" onClick={handleClick}>
          <i
            id="iconMenu"
            className={collapsed ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
