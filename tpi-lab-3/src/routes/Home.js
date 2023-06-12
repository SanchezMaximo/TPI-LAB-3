import React from 'react'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'

const Home = () => {
  return (
  <div>
    <NavBar/>
    <HomePage cName="homePage"
    imgClass="imgClass"
    homeImg="https://images.unsplash.com/photo-1561336635-c0e118ad72a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
    title="SPECIALTY COFFEE"
    text="Disfrutamos de crear experiencias"
    buttonText="Conocer mas"
    url="/"
    btnClass="show"
    />
  </div>
  )
}

export default Home