import React from 'react'

import "./AboutPage.css"

const AboutPage = (props) => {
  return (
    <div className={props.aboutPageMid}>
        <img alt='coffeShop' src={props.aboutImg} className={props.imgClass}/>
    </div>      
  )
}

export default AboutPage