import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { isSafari } from "react-device-detect";
import classes from "./Resume.module.css";
import { educationDataArr, experienceDataArr } from "../../assets/data/data";
import { ResumeItem } from "./components/ResumeItem/ResumeItem";
import cv from "../../assets/CV_Illia_Moiseienko.pdf";
import { BASE_MODE } from "../../assets/constants";

export const Resume = ({ mode }) => {
  const [isSafariLess750, setIsSafariLess750] = useState(false);

  useEffect(() => {
    Aos.init({ once: true });
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
      id="resume"
      className={`
        ${
          mode === BASE_MODE
            ? classes.resume
            : `${classes.resume} ${classes.resume_dark}`
        } ${isSafariLess750 ? classes.safariLess750 : ""}`}
    >
      <div className={classes.resumeHeading}>
        <div>Resume</div>
        <h2>A summary of My Resume</h2>
      </div>
      <div className={classes.resumeContent}>
        <div
          className={classes.resumeEducationWrapper}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h3>My Education</h3>
          <div className={classes.resumeEducation}>
            {educationDataArr.map((education) => (
              <ResumeItem
                mode={mode}
                data={education}
                isSafariLess750={isSafariLess750}
                subject={"edu"}
                key={education.id}
              />
            ))}
          </div>
        </div>
        <div
          className={classes.resumeExperienceWrapper}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3>My Experience</h3>
          <div className={classes.resumeExperience}>
            {experienceDataArr.map((education) => (
              <ResumeItem
                mode={mode}
                data={education}
                isSafariLess750={isSafariLess750}
                key={education.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={classes.download}
        data-aos="zoom-in-down"
        data-aos-duration="500"
      >
        <a href={cv} download="my-cv.pdf">
          <button>Download CV</button>
        </a>
      </div>
    </section>
  );
};
