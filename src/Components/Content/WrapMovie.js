import React from "react";
import classes from "./wrapMovie.module.css";

const WrapMovie = (props) => {
  return (
    <div className={classes.wrap}>
      <h2>{props.tittle}</h2>
      <p>{props.openingText}</p>
      <h3>{props.releaseDay}</h3>
    </div>
  );
};

export default WrapMovie;
