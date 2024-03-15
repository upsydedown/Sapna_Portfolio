import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Play from "./Components/Play";
import MobileMessage from "./Components/MobileMessage.js";
import Footer from "./Components/Footer.js";

import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1000); // Adjust width as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && <MobileMessage />}
      <section className="mainAppBody">
        <div className="navigationPanel">
          <Navbar />
        </div>
        <div className="mainAppContainer">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </div>
        <div className="footerPanel">
          <Footer />
        </div>
      </section>
      {/* <Play /> */}
    </>
  );
};

export default App;
