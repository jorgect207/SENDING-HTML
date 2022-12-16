import React from "react";
import classes from "./Top.module.css";

const Top = (props) => {
  return (
    <div className={classes.top}>
      <button type="button" onClick={props.onClick}>
        {props.onTittle}
      </button>
    </div>
  );
};

export default Top;
