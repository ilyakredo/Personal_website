import React from "react";
import classes from "./DataItem.module.css";
import { BASE_MODE } from "../../../../../assets/constants";

export const DataItem = ({
  icon,
  data,
  dataDesc,
  important,
  mode,
  isSafariLess750,
}) => {
  return (
    <div
      className={`
        ${
          mode === BASE_MODE
            ? classes.dataItem
            : `${classes.dataItem} ${classes.dataItem_dark}`
        } ${isSafariLess750 ? classes.safariLess750 : ""}`}
    >
      <div className={classes.iconWrapper}>{icon}</div>
      {important && <p className={classes.marked}>{data}</p>}
      {!important && (
        <p>
          {dataDesc ? <span>{`${dataDesc}: `}</span> : ""}
          {data}
        </p>
      )}
    </div>
  );
};
