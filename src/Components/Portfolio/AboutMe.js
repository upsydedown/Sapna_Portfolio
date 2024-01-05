import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";
import Header from "./Header";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <section className="aboutMeMainBody">
        <div className="aboutMeBox">
          <div className="aboutMeHeader">
            <figure className="aboutMeimage image1" data-aos="fade-right">
              <img src="./images/jenna1.jpg" alt="" />
            </figure>
            <figure className="aboutMeimage image2" data-aos="fade-up">
              <img src="./images/jenna2.jpg" alt="" />
            </figure>
            <figure className="aboutMeimage image3" data-aos="fade-left">
              <img src="./images/jenna3.jpg" alt="" />
            </figure>
          </div>
          <div className="aboutMeHeaderText">
            <Header heading="About Me" animation="fade-down" />
            <p className="aboutMeText" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dicta, eos quia eligendi, sed et aperiam minus commodi sint fuga
              quam enim sequi ea, reprehenderit suscipit eaque nesciunt quidem
              dolorem! Sit est officia deleniti dolorum dolore doloremque,
              quaerat adipisci id esse? Doloremque esse dolore quis consequatur
              recusandae saepe quidem, dolor sit quibusdam fugit, repellendus
              iusto voluptates alias, nemo eligendi eius corrupti explicabo
              voluptate quas non id delectus. Impedit dolorum eaque fugiat,
              nobis magni, modi iure commodi voluptate harum aliquam nihil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
