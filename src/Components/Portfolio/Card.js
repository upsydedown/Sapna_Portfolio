import React from "react";
import "./Card.css";

const Card = ({ heading, cardImage, cardCaption, children }) => {
  return (
    <>
      <div className="cardContainer">
        <img className="cardImage" src={cardImage} alt="" srcset="" />
        <div className="cardTextBox">
          <h3 className="heading">{heading}</h3>
          <caption className="cardPara">{cardCaption}</caption>
        </div>
      </div>
    </>
  );
};

export default Card;
