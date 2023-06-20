import React from 'react';
import "./ContactBody.css";

const ContactBody = () => {

  return (
    <div className='contactBody'>
        <h2>Contact Us</h2>
        <div className='infoContact'>
          <h4>Phone</h4>
          <p>(212)9427</p>
        </div> 
        <div className='locationContact'>
          <h4>Location</h4>
          <p>Ashton New Rd, Manchester M11 3FF, Reino Unido.</p>
        </div>
        <div className='hoursContact'>
              <h4>Hours</h4>
              <h5>Weekdays</h5>
              <p>7AM - 6PM</p>
              <h5>Weekends</h5>
              <p>8AM - 5PM</p>
        </div>
    </div>
  )
}

export default ContactBody