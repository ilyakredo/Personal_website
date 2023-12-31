import React from "react";
import classes from "./DetailItem.module.css";
import { BASE_MODE } from "../../../../assets/constants";

export const DetailItem = ({ detail, value, mode }) => {
  return (
    <div
      className={
        mode === BASE_MODE
          ? classes.detailItem
          : `${classes.detailItem} ${classes.detailItem_dark}`
      }
    >
      <p>{detail}:</p>
      {detail === "Email" ? (
        <p>
          <a href={`mailto:${value}`}>{value}</a>
        </p>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};
