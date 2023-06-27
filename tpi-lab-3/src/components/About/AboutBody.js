import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import "./AboutBody.css"; 


const AboutBody = () => {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div id='AboutBody' 
    className={`aboutBody ${isDarkMode ? "dark" : "light"}`}>
        <div className='presentation'>
        Coffee&Bakery is a modern coffee company established in Rosario, Argentina in 2001. We started in a small store far from the city center, a dedicated team with the goal of bringing something new and exciting to Rosario. Quickly, this dedication to offering exceptional coffee experiences turned into an obsession for a rapidly growing industry that was slowly spreading around the world.
        </div>
        <div className='history'>
            <h3>Sourcing the finest coffees</h3>
            There is a constant need to travel for coffee, both to origin countries and to cities around the world, constantly seeking inspiration both within and outwith the coffee industry. We seek collaborations with talented creatives who share our drive, passion and curiosity. Each of these connections, however fleeting, has shaped how we create and share coffee experiences.

            We have come to approach coffee with a great appreciation for our raw material. The character of a coffee cherry comes to life as a result of highly specific conditions, which require great skill on the part of the producer to create. We therefore only work with trusted partners to source our coffees, both directly with producers and with a select few devoted importing companies, but always with utmost quality in mind. We also hope to offer the freshest coffee experiences, by reflecting the seasonality of coffee harvesting as closely as possible in our offering. We visit origin countries several times a year, building relationships with skilled individuals, those who pour their work into the field, those who give their care to each plant and ripening cherry. Their expertise and passion is inspiring, and only pushes us further to present their work as best as we can.
        </div>
        <div className='experience'>
            <h3>The experience</h3>
            The experience is totally timeless. Guests are greeted with warmth, delicious drinks and food flow behind the bar. 
            It is an atmosphere of warmth and familiarity, coupled with intrigue and excitement.

            Behind the scenes, our baristas and hosts are hard at work. The techniques, tools and ingredients they use are designed to provide us with a product that is always exceptional. Our ability to create a dynamic atmosphere and ambiance is unparalleled.

            The beverages and foods we serve are part of our DNA. From our homemade cakes to our coffees, and even our chocolate milk, we develop our recipes from scratch in order to please a demanding public. 
            Taking the extra step to create our own thoughtful, high-quality recipes is part of the backbone of our unique experience.
        </div>
    </div>
  )
}

export default AboutBody