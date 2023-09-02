import React from "react";
import classes from "./Footer.module.css";

export const Footer = ({ mode }) => {
  return (
    <footer
      className={
        mode === "light"
          ? classes.footer
          : `${classes.footer} ${classes.footer_dark}`
      }
    >
      <p>© 2023 Illia Moiseienko.</p>
    </footer>
  );
};
