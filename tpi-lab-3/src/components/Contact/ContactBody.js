import React from 'react';
import "./ContactBody.css";

const ContactBody = () => {
  return (
    <div className='contactBody'>
        <div className='phone'>
            <h3>Phone</h3>
            <p>(212)208-3894</p>
        </div>
        <div className='location'>
            <h3>Location</h3>
            <p>301 Bernabeu Street</p>
            <p>Madrid 1812 - Rosario</p>
        </div>
        <div className='hours'>
            <h3>Hours</h3>
            <h4>Weekdays</h4>
            <p>7AM - 6PM</p>
            <h4>Weekends</h4>
            <p>8AM - 5PM</p>
        </div>
        <div>
            <p>Questions, comments, secret love notes? We'd love to hear from you. Please email us at hello@coffee&bakery.com</p>
        </div>
    </div>
  )
}

export default ContactBody