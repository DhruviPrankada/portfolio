import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./workcarddata1";

import React from "react";


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Certificates</h1>
      
<p>• Foundations of User Experience (UX) Design an online course authorized by Google and offered through Coursera.</p>
<p>• Foundations:Data, Data, Everywhere an online course authorized by Google and offered through Coursera.</p>
<p>• Foundations of Digital Marketing and E-commerce an online course authorized by Google and offered through Coursera.</p>
<p>• Introduction to Cybersecurity Tools & Cyber Attacks an online course authorized by IBM and offered through Coursera.</p>
<p>• Foundations of Project Management an online course authorized by Google and offered through Coursera.</p>
<p>• Microsoft Certified Security, Compilance,and Identity Fundamentals.</p>
<p>• Certificate for the Completion of Advanced Cpp Training</p>
<p>• Certificate for the Completion of PHP and MySQL Training</p>
<p>• Certificate for the Completion of Java Training</p>
<p>• Participation and Finalist in Hackathon</p>
<p>• Coursera certificate on Linux Fundamentals.</p>
<p>• Acquired training on web designing from CAD DESK.</p>

      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind) => {
          return(
            <WorkCard 
            key = {ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
          )
        })}
      </div>

    </div>
  );
};

export default Work;