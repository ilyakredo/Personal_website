// import React from "react";
// import classes from "./QualityItem.module.css";
// import icon from "../../../../assets/icons/check-solid.svg";

// export const QualityItem = ({ message }) => {
//   return (
//     <div className={classes.qualityItem}>
//       <img src={icon} alt="Checked" />
//       <p>{message}</p>
//     </div>
//   );
// };
import React, { useState } from "react"; // Don't forget to import useState
import classes from "./QualityItem.module.css";
import icon from "../../../../assets/icons/check-solid.svg";

export const QualityItem = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rotationStyle = isHovered ? classes.rotateIcon : "";

  return (
    <div
      className={`${classes.qualityItem} ${rotationStyle}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={icon} alt="Checked" className={classes.icon} />
      <p>{message}</p>
    </div>
  );
};
