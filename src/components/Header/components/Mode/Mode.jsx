import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import classes from "./Mode.module.css";
import { BASE_MODE } from "../../../../assets/constants";

export const Mode = ({ mode, onChangeMode }) => {
  return (
    <div className={classes.mode}>
      <div
        className={
          mode === BASE_MODE
            ? classes.modeWrapper
            : `${classes.modeWrapper} ${classes.modeWrapper_dark}`
        }
        onClick={onChangeMode}
      >
        {mode === BASE_MODE ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </div>
    </div>
  );
};
