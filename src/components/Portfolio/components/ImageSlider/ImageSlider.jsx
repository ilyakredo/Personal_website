import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./ImageSlider.module.css";
import { SLIDER_STYLES } from "../../../../assets/constants";

export const ImageSlider = ({ slides }) => {
  return (
    <div className={classes.slideContainer}>
      <Slide>
        {slides.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...SLIDER_STYLES,
                backgroundImage: `url(${slideImage})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
