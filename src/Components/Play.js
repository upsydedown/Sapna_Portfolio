import React from "react";
import "./Play.css";
import Header from "./Header";
import Card from "./Card";

const Play = () => {
  return (
    <>
      <section className="playMain">
        <div className="playMainBody">
          <Header heading="Play" />
          <p className="playText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            explicabo totam labore ducimus, quibusdam itaque pariatur rerum
            omnis reiciendis tempore. Provident commodi mollitia quam quis
          </p>
          <Card />
        </div>
      </section>
    </>
  );
};

export default Play;
