import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import classes from "./Social.module.css";
import { BASE_MODE } from "../../../../assets/constants";

export const Social = ({ mode }) => {
  return (
    <div
      className={
        mode === BASE_MODE
          ? classes.socialWrapper
          : `${classes.socialWrapper} ${classes.socialWrapper_dark}`
      }
    >
      <ul>
        <li>
          <a href="https://www.facebook.com/ilya.moiseenko" target="blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/illia-moiseienko/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/ilyakredo" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ilyakredo/" target="blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
