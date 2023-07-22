import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/last.jpg";
import React2 from "../assets/last1.jpg";
import "./aboutcontentstyles.css";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>"VIT University in Chennai is where I am doing my computer engineering degree. I am a proficient coder with knowledge of numerous programming languages. Researching and creating new technologies is something I enjoy doing. I have completed numerous web development projects. By creating projects, I'm eager to increase my understanding of IOT and blockchain development. I have a positive outlook and am a quick learner. I'm also good at working under pressure and handling challenging circumstances. I have excellent leadership qualities and am exceptional at team management, can facilitate effective teamwork."</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
