import React from 'react'
import "./NavBar.css"


const NavBar = () => {
  return (
    <>
    <nav>
        <a href='index.html'>
            <img src='./img/logo.png' alt='coffee mug ' width={60} height={60}/> 
        </a>
        <div>
            <ul id="navbar">
                <li><a className="active" href='index.html'>Home</a></li>
                <li><a href='index.html'>Products</a></li>
                <li><a href='index.html'>About</a></li>
                <li><a href='index.html'>Contact</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar