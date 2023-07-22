import React from "react";
import Navbar from "../components/Navbar1.js";
import Form from "../components/form";
import Footer from "../components/footer.js";
import Heroimg2 from "../components/Heroimg2.js";
const Contact1 = () => {
  return  ( <div>
          <Navbar />
          <Heroimg2 heading="CONTACT." text="Let's Chat" />
    <Form/> 
      <Footer />
  </div>
  );
};

export default Contact1;