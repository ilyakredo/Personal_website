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

export const ResumeItem = ({ data, subject, isSafariLess750, mode }) => {
  return (
    <div
      className={`${classes.resumeItem} ${
        isSafariLess750 ? classes.safariLess750 : ""
      }`}
    >
      {subject === "edu" ? (
        <>
          <DataItem
            mode={mode}
            icon={<FaTrophy />}
            data={data.title}
            important={true}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaBuildingColumns />}
            data={data.institution}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaClock />}
            data={data.duration}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaCircleInfo />}
            data={data.description}
            dataDesc={data.descriptionSubject}
            isSafariLess750={isSafariLess750}
          />
        </>
      ) : (
        <>
          <DataItem
            mode={mode}
            icon={<FaBriefcase />}
            data={data.title}
            important={true}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaBuildingUser />}
            data={data.employer}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaClock />}
            data={data.duration}
            isSafariLess750={isSafariLess750}
          />
          <DataItem
            mode={mode}
            icon={<FaStar />}
            data={data.jobDesc}
            expDesc={true}
            isSafariLess750={isSafariLess750}
          />
        </>
      )}
    </div>
  );
};
