import "./FooterStyles.css"
import React from 'react'

import {
   FaGithub,
   FaHome, 
   FaLinkedin,  
   FaMailBulk 
  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">
            <div className = "left">
                <div className = "location">
                    <FaHome size={20} style={{color:
                    "#fff", marginRight: "0.5rem"}}/>
                    <div>
                      <p>Kaunas,</p>
                      <p>Lithuania</p>
                    </div>
                    <div className="email">
                      <h4>
                        <FaMailBulk size={20} style={{color:
                    "#fff", marginRight: "0.5rem", marginLeft: "1.2rem"}}/>
                    matas.reklaitis@vdu.lt
                    </h4>
                    </div>
                </div>
            </div>
            <div className = "right">
              <h4>Purpose</h4>
              <p>This website was built during an assignment
                for the course "Internet technologies" at Vytautas
                Magnus University.
              </p>
              <div className="social">
              <a href="https://www.linkedin.com/in/matas-reklaitis-9b42b8244/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={30} 
                style={{color: "#fff", marginRight: "1rem"}}
                />
              </a>
              <a href="https://github.com/Matkis" target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={30} 
                style={{color: "#fff", marginRight: "1rem"}}
                />
              </a>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer