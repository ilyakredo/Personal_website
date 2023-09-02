import React from "react";
import classes from "./QualityItem.module.css";

export const QualityItem = ({ title, description, icon }) => {
  return (
    <div className={classes.qualityItem}>
      <div className={classes.heading}>
        <h3>{title}</h3>
      </div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
      <div className={classes.iconWrapper}>{icon}</div>
    </div>
  );
};
