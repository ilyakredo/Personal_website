import React, { useState } from "react";
import classes from "./Icon.module.css";

export const Icon = ({ icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classes.iconWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {isHovered && (
        <div className={classes.popup}>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};
