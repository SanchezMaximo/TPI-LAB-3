import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import ContactPage from '../components/Contact/ContactPage';

const Contact = () => {
  return (
  <div>
    <NavBar/>
    <ContactPage 
    cName="contactPageMid"
    imgClass="imgClass"
    aboutImg="img/coffee.jpg"
    title="Contact"
    />
  </div>
  )
}

export default Contact;
