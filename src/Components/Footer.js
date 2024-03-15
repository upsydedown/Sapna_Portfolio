import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerText">
          <a
            href="mailto: sapna.g3198@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sapnaguptaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/savvysapna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://cornstarchstudios.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DashboardIcon />
          </a>

          <h6>© Designed and Developed by Sapna Gupta and Chintan Senapati</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
