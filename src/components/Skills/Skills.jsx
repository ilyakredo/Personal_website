import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { isSafari } from "react-device-detect";
import classes from "./Skills.module.css";
import { SkillsItem } from "./components/SkillsItem/SkillsItem";
import { skillsArr } from "../../assets/data/data";
import { BASE_MODE } from "../../assets/constants";

export const Skills = ({ mode }) => {
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
      id="skills"
      className={`
        ${
          mode === BASE_MODE
            ? classes.skills
            : `${classes.skills} ${classes.skills_dark}`
        } ${isSafariLess750 ? classes.safariLess750 : ""}`}
    >
      <div className={classes.skillsHeading}>
        <div>Skills</div>
        <h2>A List of My Skills & Technologies</h2>
      </div>
      <div className={classes.skillsWrapper}>
        {skillsArr.map((skill, ind) => (
          <div
            data-aos="flip-left"
            data-aos-duration={`${(ind + 1) * 100}`}
            key={skill.id}
          >
            <SkillsItem
              icon={skill.icon}
              title={skill.title}
              url={skill.url}
              percentage={skill.percentage}
              color={skill.color}
              mode={mode}
              isSafariLess750={isSafariLess750}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
