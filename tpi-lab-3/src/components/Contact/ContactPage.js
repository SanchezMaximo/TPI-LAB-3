import React from 'react'

import "./ContactPage.css"
 

const ContactPage = (props) => {
  return (
    <div className={props.ContactPageMid}>
      <img alt='coffeShop' src={props.contactImg} className={props.imgClass}/>

      <div className="contactPage-text">
          <h2>{props.title}</h2>
          <h3>Coffee & Bakery</h3>
          <p>Madrid 1812 - Rosario</p>
      </div>  
    </div> 
  )
}

export default ContactPage