import React from "react";
import "./Header.css";

const Header = ({ heading, animation }) => {
  return (
    <>
      <h1 className="sectionHeader" data-aos={animation}>
        {heading}
      </h1>
    </>
  );
};

export default Header;
