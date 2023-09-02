import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./Skills.module.css";
import { SkillsItem } from "./components/SkillsItem/SkillsItem";
import { skillsArr } from "../../assets/data/data";

export const Skills = ({ mode }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <section
      id="skills"
      className={
        mode === "light"
          ? classes.skills
          : `${classes.skills} ${classes.skills_dark}`
      }
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
            />
          </div>
        ))}
      </div>
    </section>
  );
};
