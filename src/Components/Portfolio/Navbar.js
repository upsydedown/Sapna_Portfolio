import React from "react";
import style from "./Navbar.css";
import { NavLink, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}
const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="navbarbody">
          <nav className="navigation">
            <CustomLink to="/"> Home</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Projects">Projects</CustomLink>
            <CustomLink to="/Play">Play</CustomLink>
            <CustomLink to="/Resume">Resume</CustomLink>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
