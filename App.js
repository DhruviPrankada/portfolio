import React from "react";
import "./index.css";
import Home from "./routes/Home1";
import About from "./routes/About1.js";
import Project from "./routes/Project1.js";
import Contact from "./routes/Contact1.js";

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
