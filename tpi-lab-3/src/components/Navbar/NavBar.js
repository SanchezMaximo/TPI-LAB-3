import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../MenuItems";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  //arrow function para cambiar el estado del navbar
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <nav id="NavBar" className={isDarkMode ? "dark" : "light"}>
        <Link to="/" className="logo">
        Coffee&Bakery
        </Link>
        <div>
          {/* si el collapsed es true muestra el navbar mobile */}
          <ul id="navbar" className={collapsed ? "#navbar active" : "#navbar"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index + item}>
                  <Link to={item.url}  onClick={handleClick} >
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {user != null ? (
              <div className="registrationNavBar">
                <p className={isDarkMode ? "darkWelcome" : "lightWelcome"}>
                Welcome, {user.email.split("@")[0]}!</p>
                <button
                  className={isDarkMode ? "buttonHistoryDark" : "buttonHistoryLight"}
                  onClick={() => navigate("/purchases")}
                >
                  History
                </button>
                <button className="buttonLogout" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            ) : (
              <div className="registrationNavBar">
                <li className="buttonLogIn" onClick={() => navigate("/login")}>
                  <svg
                    className="iconLogIn"
                    width="30"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
                  </svg>
                  Log In
                </li>
                <li
                  className="buttonSignUp"
                  onClick={() => navigate("/signup")}
                >
                  <svg
                    className="iconLogIn"
                    width="30"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
                  </svg>{" "}
                  Sign Up
                </li>
              </div>
            )}
            {/* <li onClick={() => navigate("/userlist")} className="userList">☕</li> */}
            <button
              className={isDarkMode ? "sun" : "moon"}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <li>🌝</li>
              ) : (
                <li>🌚</li>
              )}
            </button>
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
      {children}
    </>
  );
};

export default NavBar;
