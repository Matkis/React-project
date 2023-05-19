import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom";
import python from "../assets/python.png"
import volleyball from "../assets/volleyball.avif"

const AboutContent = () => {
  return (
    <div className = "about">
        <div className= "left">
            <h1>Who am I?</h1>
            <p>I'm a student who enjoys sports, games and web development. My favorite programming language is Python, and my favorite sport is Volleyball. During my free time I also play some computer games.</p>
            <Link to="/contact">
                <button className = "btn">Contact Me</button>
            </Link>
        </div>

        <div className = "right">
            <div className = "img-container">
                <div className = "img-stack-top">
                    <img src = {python} className = "img" alt="python logo" />
                </div>
                <div className = "img-stack-bottom">
                    <img src = {volleyball} className = "img" alt="volleyball ball image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent