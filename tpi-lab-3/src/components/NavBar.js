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
        <a href='index.html'>
            <img src='./img/logo.png' alt='coffee mug ' width={60} height={60}/> 
        </a>
        <div>
            {/* si el collapsed es true muestra el navbar mobile */}
            <ul id="navbar" className={collapsed ? ("#navbar active"):("#navbar")}>
                <li><a className="active" href='i'>Home</a></li>
                <li><a href='i'>Products</a></li>
                <li><a href='i'>About</a></li>
                <li><a href='i'>Contact</a></li>
            </ul>
        </div>
        {/* cambio de logo del navbar */}
        <div id="mobile" onClick={handleClick}>
            <i id="bar" className={collapsed ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </nav>
    </>
  )
}

export default NavBar