import React from "react";
import Navbar from "../components/Navbar1.js";
import AboutContent from "../components/aboutcontent.js";
import Footer from "../components/footer.js";
import Heroimg2 from "../components/Heroimg2.js";

const About1 = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I am Computer Science Engineering BTECH Student." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About1;
