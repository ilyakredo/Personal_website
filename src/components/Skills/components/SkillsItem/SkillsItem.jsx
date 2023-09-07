import React, { useState } from "react";
import classes from "./SkillsItem.module.css";
import { BASE_MODE } from "../../../../assets/constants";

export const SkillsItem = ({
  icon,
  title,
  url,
  percentage,
  color,
  mode,
  isSafariLess750,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyles = {
    fill: isHovered ? `${color}` : `${mode === BASE_MODE ? "#555" : "#5edcfc"}`,
    transition: "all 0.3s ease",
  };

  return (
    <div
      className={`
        ${
          mode === BASE_MODE
            ? classes.skillsItem
            : `${classes.skillsItem} ${classes.skillsItem_dark}`
        } ${isSafariLess750 ? classes.safariLess750 : ""}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ display: "inline-block" }}
        >
          {React.cloneElement(icon, { style: iconStyles })}
        </div>
      </a>
      <p>{title}</p>
      <div className={classes.barWrapper}>
        <div className={classes.bar} style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};
