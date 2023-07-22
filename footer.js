import "./footerStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff" , marginRight: "2rem"}} />
                    <div>
                        <p>VIT CHENNAI</p>
                        <p>Kelambakkam - Vandalur Rd, Rajan Nagar</p>
                        <p>Chennai,Tamil Nadu 600127, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} stylr={{color: "#fff", marginRight: "2rem"}} />999-9999-9999</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} stylr={{color: "#fff", marginRight: "2rem"}} /> dhruvi2002p@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Portfolio</h4>
                <p>This Portfolio is about Dhruviben Ajitsinh Prankada, 4th year computer science engineering student doing engineering from VIT chennai.This portfolio contains all my recent works and achievements.</p>
                <div className="social">
                    <FaInstagram
                     size = {20}
                     style = {{ color: "#fff",
                    marginRight: "1rem" }}
                    />
                    <FaLinkedin
                     size = {20}
                     style = {{ color: "#fff",
                    marginRight: "1rem" }}
                    />
                    <FaGithub
                     size = {20}
                     style = {{ color: "#fff",
                    marginRight: "1rem" }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer