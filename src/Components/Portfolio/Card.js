import React from "react";
import "./Card.css";

const Card = ({ cardHeading, cardImage, cardPara, children, link }) => {
  return (
    <>
      <div className="cardContainer">
        <img src={cardImage} alt="" srcset="" />
        <h4 className="cardHeading">{cardHeading}</h4>
        <figcaption className="cardPara">{cardPara}</figcaption>
        <button className="knowMore">
          <a href={link}> Know more</a>
        </button>
      </div>
    </>
  );
};

export default Card;
