import React from "react";
import classes from "./wrapMovie.module.css";

const WrapMovie = (props) => {
  return (
    <div className={classes.wrap}>
      <h2>{props.tittle}</h2>
      <div>{props.episodes}</div>
    </div>
  );
};

export default WrapMovie;
