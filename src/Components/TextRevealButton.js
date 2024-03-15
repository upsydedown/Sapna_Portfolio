import React, { useState } from "react";
import "./TextRevealButton.css";
function TextRevealButton({ animation }) {
  const [textIndex, setTextIndex] = useState(-1); // Initial state: nothing visible
  const texts = [
    "Is this a game or a portfolio? Click again and I'll tell ya!",
    "Haha! Made you click. Now trust me and click again.?",
    "Why are you still here clicking? Explore the nav bar!",
  ];

  const handleClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="buttonBody">
      <button
        data-aos={animation}
        className="scrollUpbtn"
        onClick={handleClick}
      >
        Click Here
      </button>
      <div className="revealedTextContainer">
        {texts.map((text, index) => (
          <p
            className="btnText"
            key={index}
            style={{ display: textIndex === index ? "block" : "none" }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TextRevealButton;
