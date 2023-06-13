import React, {useState} from 'react';
import { useAuth } from "../context/authContext";

import { MenuItems } from '../MenuItems';
import "./NavBar.css"
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  //arrow function para cambiar el estado del navbar
  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  //log in log out
  const { logout } = useAuth();

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
            <button onClick={handleLogout}>Log Out</button>
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
