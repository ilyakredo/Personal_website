import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { isSafari } from "react-device-detect";
import classes from "./Home.module.css";
import photoMinor from "../../assets/images/photo_640_min.png";
import photo from "../../assets/images/photo.webp";
import { scrollToSection } from "../../helpers/scrolling";

export const Home = () => {
  const [isSafariLess750, setIsSafariLess750] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    if (isSafari && window.innerWidth <= 750) {
      setIsSafariLess750(true);
    } else {
      setIsSafariLess750(false);
    }
  }, []);

  return (
    <section
      id="home"
      // className={classes.home}
      className={`${classes.home} ${
        isSafariLess750 ? classes.safariLess750 : ""
      }`}
    >
      <div className={classes.homeWrapper}>
        <div className={classes.greetWrapper}>
          <h1>Hi, my name is Illia, I'm a</h1>
          <p className={classes.runningMessage}>
            {" "}
            {
              <TypeAnimation
                sequence={["Frontend", 1000, "Software", 1000]}
                speed={20}
                style={{ fontSize: "8.5vw" }}
                repeat={Infinity}
              />
            }
          </p>
          <p className={classes.greetMessage}>developer</p>
          <p className={classes.greetLocation}>Based in Calgary, AB, Canada</p>
          <div className={classes.handleWrapper}>
            <button onClick={(e) => scrollToSection("portfolio", e)}>
              View my work
            </button>
            <a href="/" onClick={(e) => scrollToSection("contact", e)}>
              Contact me
            </a>
          </div>
        </div>
        <div className={classes.photoWrapper}>
          <picture data-aos="zoom-in">
            <source srcSet={photo} type="image/webp" />
            <img src={photoMinor} alt="Me" />
          </picture>
        </div>
      </div>
    </section>
  );
};
