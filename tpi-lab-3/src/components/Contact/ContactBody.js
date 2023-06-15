import React from 'react';
import "./ContactBody.css";

const ContactBody = () => {

  return (
    <div className='contactBody'>
        <h2>Contact Us</h2>
        <div className='infoContact'>
        <h4>Phone</h4>
        <p>(212)9427</p>
        <h4>Location</h4>
        <p>Ashton New Rd, Manchester M11 3FF, Reino Unido</p>
        <div className='hours'>
            <h4>Hours</h4>
            <h5>Weekdays</h5>
            <p>7AM - 6PM</p>
            <h5>Weekends</h5>
            <p>8AM - 5PM</p>
        </div>
        </div>
    </div>
  )
}

export default ContactBody