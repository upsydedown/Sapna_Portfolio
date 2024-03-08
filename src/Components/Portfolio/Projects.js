import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 600, delay: 0, once: true });
  }, []);
  return (
    <>
      <section className="myProjects">
        <div className="myProjectCard">
          <div className="myProjectHeader">
            <Header heading={"Projects"} />
          </div>
          <div className="imageBox">
            <a href="https://www.flipsnack.com/87EDE75569B/design-audits/full-view.html">
              <img
                src="./images/Book1.png"
                data-aos="zoom-out-up"
                data-aos-delay="0"
                alt=""
                srcset=""
              />
            </a>
            <a href="">
              <img
                src="./images/Book5.png"
                data-aos="zoom-out-up"
                data-aos-delay="50"
                alt=""
                srcset=""
              />
            </a>
            <a href="">
              <img
                src="./images/Book3.png"
                data-aos="zoom-out-up"
                data-aos-delay="100"
                alt=""
                srcset=""
              />
            </a>
            <a href="">
              <img
                src="./images/Book2.png"
                data-aos="zoom-out-up"
                data-aos-delay="150"
                alt=""
                srcset=""
              />
            </a>
            <a href="">
              <img
                src="./images/Book4.png"
                data-aos="zoom-out-up"
                data-aos-delay="200"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
