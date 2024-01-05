import React from "react";
import "./Projects.css";
import Header from "./Header";
import Card from "./Card";
const Projects = () => {
  return (
    <>
      <section className="myProjects">
        <div className="myProjectCard">
          <Card
            cardImage="./images/5MH.png"
            cardHeading="Five minutes"
            cardPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dicta, eos quia eligendi, sed et aperiam minus commodi sint fuga
              quam enim sequi ea, reprehenderit suscipit eaque nesciunt quidem
              dolorem! Sit est officia deleniti dolorum dolore doloremque,
              quaerat adipisci id esse? Doloremque esse dolore quis consequatur
              recusandae saepe quidem, dolor sit quibusdam fugit, repellendus
              iusto voluptates alias, nemo eligendi eius corrupti explicabo
              voluptate quas non id delectus. Impedit dolorum eaque fugiat,
              nobis magni, modi iure commodi voluptate harum aliquam nihil."
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
