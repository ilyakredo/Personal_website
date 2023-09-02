import React from "react";
import { FaTrophy, FaStar } from "react-icons/fa";
import {
  FaBuildingColumns,
  FaClock,
  FaCircleInfo,
  FaBriefcase,
  FaBuildingUser,
} from "react-icons/fa6";
import classes from "./ResumeItem.module.css";
import { DataItem } from "./DataItem/DataItem";

export const ResumeItem = ({ data, subject, mode }) => {
  return (
    <div className={classes.resumeItem}>
      {subject === "edu" ? (
        <>
          <DataItem
            mode={mode}
            icon={<FaTrophy />}
            data={data.title}
            important={true}
          />
          <DataItem
            mode={mode}
            icon={<FaBuildingColumns />}
            data={data.institution}
          />
          <DataItem mode={mode} icon={<FaClock />} data={data.duration} />
          <DataItem
            mode={mode}
            icon={<FaCircleInfo />}
            data={data.description}
            dataDesc={data.descriptionSubject}
          />
        </>
      ) : (
        <>
          <DataItem
            mode={mode}
            icon={<FaBriefcase />}
            data={data.title}
            important={true}
          />
          <DataItem
            mode={mode}
            icon={<FaBuildingUser />}
            data={data.employer}
          />
          <DataItem mode={mode} icon={<FaClock />} data={data.duration} />
          <DataItem
            mode={mode}
            icon={<FaStar />}
            data={data.jobDesc}
            expDesc={true}
          />
        </>
      )}
    </div>
  );
};
