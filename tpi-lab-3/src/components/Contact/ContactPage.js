import React from 'react'

import "./ContactPage.css"
 

const ContactPage = (props) => {
  return (
    <div className={props.ContactPageMid}>
    <img alt='coffeShop' src={props.aboutImg} className={props.imgClass}/>

    <div className="contactPage-text">
        <h1>{props.title}</h1>
    </div>
</div> 
  )
}

export default ContactPage