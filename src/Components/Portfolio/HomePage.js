import React from "react";
import "./HomePage.css";
import "animate.css";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <>
      <nav className="navigation">
        <span>
          <a href="">Home </a>
        </span>
        <span>
          <a href="">About Me </a>
        </span>
        <span>
          <a href="">Reach Me Out </a>
        </span>
      </nav>

      <section className="header">
        <div className="headerBox">
          <div className="headerLeft animate__animated animate__fadeIn animate__delay-1s">
            <img src="./images/rough.png" alt="" srcset="" />
          </div>

          <div className="headerRight">
            <h1 className="heading ">
              <Typewriter
                options={{
                  pauseFor: 1000000,
                  autoStart: true,
                  strings: ["Chintan Senapati"],
                  loop: false,
                  delay: 70,
                }}
              />
            </h1>
            <div className="captionText">
              <span className="cap animate__animated animate__fadeInUp animate__delay-3s">
                UI/UX
              </span>
              <span className="bar">|</span>
              <span className="cap animate__animated animate__fadeInUp animate__delay-2s">
                Developer
              </span>
              <span className="bar">|</span>
              <span className="cap animate__animated animate__fadeInUp animate__delay-4s">
                PM
              </span>
            </div>
            <button className="scrollUpbtn animate__animated animate__bounceInUp animate__delay-5s">
              Swipe Up cuties
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
