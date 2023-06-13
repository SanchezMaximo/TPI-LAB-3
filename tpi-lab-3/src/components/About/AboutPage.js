import React from 'react'

import "./AboutPage.css"

const AboutPage = (props) => {
  return (
    <div className={props.aboutPageMid}>
        <img alt='coffeShop' src={props.aboutImg} className={props.imgClass}/>

        <div className="aboutPage-text">
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    </div>      
  )
}

export default AboutPage