import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import classes from "./Mode.module.css";

export const Mode = ({ mode, onChangeMode }) => {
  return (
    <div className={classes.mode}>
      <div
        className={
          mode === "light"
            ? classes.modeWrapper
            : `${classes.modeWrapper} ${classes.modeWrapper_dark}`
        }
        onClick={onChangeMode}
      >
        {mode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        {/* <p>MODE</p> */}
      </div>
    </div>
  );
};
