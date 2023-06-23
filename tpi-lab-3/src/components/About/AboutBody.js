import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import "./AboutBody.css"; 


const AboutBody = () => {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div id='AboutBody' 
    className={`aboutBody ${isDarkMode ? "dark" : ""}`}>
        <div>
        Coffee&Bakery is a modern coffee company established in Rosario, Argentina in 2001. We started in a small store far from the city center, a dedicated team with the goal of bringing something new and exciting to Rosario. Quickly, this dedication to offering exceptional coffee experiences turned into an obsession for a rapidly growing industry that was slowly spreading around the world.
        </div>
        <div>
            <h3>Sourcing the finest coffees</h3>
            There is a constant need to travel for coffee, both to origin countries and to cities around the world, constantly seeking inspiration both within and outwith the coffee industry. We seek collaborations with talented creatives who share our drive, passion and curiosity. Each of these connections, however fleeting, has shaped how we create and share coffee experiences.

            We have come to approach coffee with a great appreciation for our raw material. The character of a coffee cherry comes to life as a result of highly specific conditions, which require great skill on the part of the producer to create. We therefore only work with trusted partners to source our coffees, both directly with producers and with a select few devoted importing companies, but always with utmost quality in mind. We also hope to offer the freshest coffee experiences, by reflecting the seasonality of coffee harvesting as closely as possible in our offering. We visit origin countries several times a year, building relationships with skilled individuals, those who pour their work into the field, those who give their care to each plant and ripening cherry. Their expertise and passion is inspiring, and only pushes us further to present their work as best as we can.
        </div>
    </div>
  )
}

export default AboutBody