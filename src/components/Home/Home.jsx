import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./Home.module.css";
import photo from "../../assets/images/photo_640_min.png";
import { scrollToSection } from "../../helpers/scrolling";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <section id="home" className={classes.home}>
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
          <img data-aos="zoom-in" src={photo} alt="me" />
        </div>
      </div>
    </section>
  );
};
