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
              Hello, I'm Chintan Senapati, a Frontend Developer who can make
              your eyes pop with my amazing UIs and my ego soar with my
              signature footers. How did I end up here? Well, it's a funny
              story, but I'll try to make it funnier. I dreamed of being a
              pilot, but fate had a different flight plan for me. So I changed
              course and enrolled in Pune University's Computer Science degree,
              where I learned the magic of coding. There, I befriended some
              awesome tools: React, Redux, JavaScript, HTML/CSS, and some other
              fancy stuff that make me look smart. Recently, I've been
              experimenting with Framer and Webflow, which are the new kids on
              the block. But coding is not my only love. I'm also into Product
              Design and Management, especially the parts that involve getting
              into people's heads, finding out what they want, brainstorming
              cool solutions, and plotting how to execute them. So that's me in
              a joke. Of course, there's more to me than that, but you'll have
              to bribe me with a coffee to hear it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
