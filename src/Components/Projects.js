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
          <img
            className="myProjectbg"
            src="./images/frame2_fill.png"
            alt=""
            srcset=""
          />

          <Header heading="Projects" animation="fade-down" />
          <div className="imageBox">
            <a
              href="https://drive.google.com/file/d/1J8GQAO-AfPmMQFwvLpAo-T9Xzs8pXmi_/view?usp=drive_link"
              target="_blank"
            >
              <img
                src="./images/Book1.png"
                data-aos="zoom-out-up"
                data-aos-delay="0"
                alt=""
                srcset=""
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1Qrcc1yYUI5rPlnSSoj0leMMhtGXUQC9b/view?usp=drive_link"
              target="_blank"
            >
              <img
                src="./images/Book2.png"
                data-aos="zoom-out-up"
                data-aos-delay="150"
                alt=""
                srcset=""
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1LMDF0MEVm4IoCwkttchHjWbZ3oUKcum8/view?usp=drive_link"
              target="_blank"
            >
              <img
                src="./images/Book3.png"
                data-aos="zoom-out-up"
                data-aos-delay="100"
                alt=""
                srcset=""
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1mvvCHRC4pvox96ox4eJO_wt_0ymUNAXi/view?usp=drive_link"
              target="_blank"
            >
              <img
                src="./images/Book4.png"
                data-aos="zoom-out-up"
                data-aos-delay="200"
                alt=""
                srcset=""
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1XsW_ggrBFu7i4Mv9o3cJwIy-47zIu0b_/view?usp=drive_link"
              target="_blank"
            >
              <img
                src="./images/Book5.png"
                data-aos="zoom-out-up"
                data-aos-delay="50"
                alt=""
                srcset=""
              />
            </a>
          </div>
          <img className="plank" src="./images/plank.png" alt="" srcset="" />
        </div>
      </section>
    </>
  );
};

export default Projects;
