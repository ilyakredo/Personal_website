import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./ImageSlider.module.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "84.5vh",
};

export const ImageSlider = ({ slides }) => {
  return (
    <div className={classes.slideContainer}>
      <Slide>
        {slides.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
