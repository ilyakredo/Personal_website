import React from "react";
import classes from "./Footer.module.css";
import { BASE_MODE } from "../../assets/constants";

export const Footer = ({ mode }) => {
  return (
    <footer
      className={
        mode === BASE_MODE
          ? classes.footer
          : `${classes.footer} ${classes.footer_dark}`
      }
    >
      <p>© 2023 Illia Moiseienko.</p>
    </footer>
  );
};
