import React, {useState} from 'react'
import "./NavBar.css"


const NavBar = () => {

  const [collapsed, setCollapsed] = useState(false);
  //arrow function para cambiar el estado del navbar
  const handleClick = () => {
        setCollapsed(!collapsed);
  }

  return (
    <>
    <nav>
        <a href='/'>
            <img src='./img/logo.png' alt='coffee mug ' width={60} height={60}/> 
        </a>
        <div>
            {/* si el collapsed es true muestra el navbar mobile */}
            <ul id="navbar" className={collapsed ? ("#navbar active"):("#navbar")}>
                <li><a href='/'><i class="icon fa-solid fa-house-user"></i>Home</a></li>
                <li><a href='/'><i class="icon fa-solid fa-mug-hot"></i>Products</a></li>
                <li><a href='/'><i class="icon fa-solid fa-circle-info"></i>About</a></li>
                <li><a href='/'><i class="icon fa-solid fa-address-book"></i>Contact</a></li>
            </ul>
        </div>
        {/* cambio de logo del navbar */}
        <div id="mobile" onClick={handleClick}>
            <i id="iconMenu" className={collapsed ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </nav>
    </>
  )
}

export default NavBar