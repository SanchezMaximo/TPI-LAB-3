import React from 'react'

import "./ContactPage.css"
 

const ContactPage = (props) => {
  return (
    <div className={props.ContactPageMid}>
      <img alt='coffeShop' src={props.contactImg} className={props.imgClass}/> 
    </div> 
  )
}

export default ContactPage