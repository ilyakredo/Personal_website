import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./About.module.css";
import { QualityItem } from "./components/QualityItem/QualityItem";
import { qualityArr } from "../../assets/data/data";
import { detailsArr } from "../../assets/data/data";
import { DetailItem } from "./components/DetailItem/DetailItem";
import { aboutInfo } from "../../assets/data/data";

export const About = ({ mode }) => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="about"
      className={
        mode === "light"
          ? classes.about
          : `${classes.about} ${classes.about_dark}`
      }
    >
      <div className={classes.aboutWrapper}>
        <div className={classes.aboutHeading}>
          <div className={mode === "light" ? "" : classes.sectionLable}>
            About Me
          </div>
          <h2>Know Me More</h2>
        </div>
        <div className={classes.aboutInfoWrapper}>
          <div className={classes.aboutDescription}>
            <h3 data-aos="fade-right" data-aos-duration="500">
              Hi, I'm <span>Illia Moiseienko</span>
            </h3>
            <p data-aos="fade-right" data-aos-duration="1000">
              {aboutInfo}
            </p>
          </div>
          <div className={classes.aboutQualitiesWrapper}>
            {qualityArr.map((qualityMsg, ind) => (
              <div
                data-aos="fade-down"
                data-aos-duration={`${(ind + 1) * 200}`}
                key={qualityMsg.id}
              >
                <QualityItem message={qualityMsg.msgBody} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.aboutDetails}>
          {detailsArr.map((detail, ind) => (
            <div
              data-aos="fade-right"
              data-aos-duration={`${(ind + 1) * 200}`}
              key={detail.id}
            >
              <DetailItem
                detail={detail.detailDesc}
                value={detail.detailValue}
                mode={mode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
