import React, { useState } from "react";
import classes from "./SkillsItem.module.css";

export const SkillsItem = ({ icon, title, url, percentage, color, mode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconStyles = {
    fill: isHovered ? `${color}` : `${mode === "light" ? "#555" : "#5edcfc"}`,
    // fill: isHovered ? `${color}` : `${mode === "light" ? "#555" : "#007bff"}`,

    transition: "all 0.3s ease",
  };

  return (
    <div
      className={
        mode === "light"
          ? classes.skillsItem
          : `${classes.skillsItem} ${classes.skillsItem_dark}`
      }
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
