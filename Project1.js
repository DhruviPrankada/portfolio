import React from "react";
import Navbar from "../components/Navbar1.js";
import HeroImg2 from "../components/Heroimg2.js";
import Work from "../components/work.js"; // Add the import statement for WorkCard
import Footer from "../components/footer.js";

const Project1 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="WORKS." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project1;
