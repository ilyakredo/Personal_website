import React from "react";
import classes from "./Logo.module.css";
import { scrollToSection } from "../../../../helpers/scrolling";
import { BASE_MODE } from "../../../../assets/constants";

export const Logo = ({ mode }) => {
  return (
    <div
      className={classes.logoWrapper}
      onClick={(e) => scrollToSection("home", e)}
    >
      <p
        className={
          mode === BASE_MODE
            ? classes.logo
            : `${classes.logo} ${classes.logo_dark}`
        }
      >
        <span>
          <code className={classes.lt}>&lt;</code>
        </span>
        <span className={classes.logoText}>im</span>
        <span>
          <code className={classes.gt}>&gt;</code>
        </span>
      </p>
    </div>
  );
};
