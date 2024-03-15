import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";
import Header from "./Header";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <section className="aboutMeMainBody">
        <div className="aboutMeBox">
          <div className="aboutMeLeft">
            <figure className="aboutMeimage image1" data-aos="fade-right">
              <img src="./images/aboutme01.png" alt="" />
            </figure>
            <figure className="aboutMeimage image2" data-aos="fade-up">
              <img src="./images/aboutme03.png" alt="" />
            </figure>
            <figure className="aboutMeimage image3" data-aos="fade-left">
              <img src="./images/aboutme02.png" alt="" />
            </figure>
          </div>
          <div className="aboutMeHeaderText">
            <img src="./images/frame_fill.png" alt="" srcset="" />
            <Header heading="Prologue" animation="fade-down" />
            <p className="aboutMeText" data-aos="fade-up">
              <span className="colorChange">Quest:</span> Embark on a mission to
              understand the human condition, through pixels!
              <span className="colorChange">(Expert Mode Unlocked)</span> <br />
              <br />
              <span className="colorChange">Current Level: </span>Sleepless
              Nights fueled by Curiosity <br />
              <br />
              <span className="colorChange"> Player: </span>Sapna Gupta, the
              Architect turned Pixel Alchemist. <br />
              <br />
              <span className="colorChange">Special Skills:</span> <br />
              <ul className="specialSkills">
                <li>Building User Stories</li>
                <li> Empathy detective with a Magnifying Glass </li>
                <li> Crafting Pixel-Perfect Solutions</li>
                <br />
                <span className="colorChange">Boss Battle:</span> Creating
                addictive experiences that transcend the screen. <br />
                <br />
              </ul>
              <span className="colorChange">Campaign Goal:</span> To collaborate
              in the language of emotions, building the foundation for digital
              interactions that leave a lasting mark. <br />
              <br />
              <span className="colorChange">Next Level:</span> Let's craft
              unforgettable user journeys together!
              <br />
              <br />
              Ready to join the quest?{" "}
              <a className="emailButton" href="mailto: sapna.g3198@gmail.com">
                Contact me
              </a>{" "}
              to unlock the next stage!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
