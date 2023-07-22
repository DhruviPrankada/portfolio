import React from "react";
import IntroImg from "../assets/images.jpg";
import { Link } from "react-router-dom";
import "./HeroimagStyles.css";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>HI, I'M A DHRUVIBEN AJITSINH PRANKADA.</p>
        <h1>COMPUTER SCIENCE ENGINEER</h1>
       <div>
          <Link to="/Project1" className="btn">
            Project
          </Link>
          <Link to="/Contact1" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
