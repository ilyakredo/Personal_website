import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import classes from "./Social.module.css";

export const Social = ({ mode }) => {
  return (
    <div
      className={
        mode === "light"
          ? classes.socialWrapper
          : `${classes.socialWrapper} ${classes.socialWrapper_dark}`
      }
    >
      <ul>
        <li>
          <a href="https://www.facebook.com/ilya.moiseenko" target="blank">
            {/* <img src={facebookIcon} alt="Facebook" /> */}
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/illia-moiseienko/"
            target="blank"
          >
            {/* <img src={linkedinIcon} alt="Linkedin" /> */}
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ilyakredo" target="blank">
            {/* <img src={githubIcon} alt="Github" /> */}
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ilyakredo/" target="blank">
            {/* <img src={instagramIcon} alt="Instagram" /> */}
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
