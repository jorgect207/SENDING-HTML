import React, { useRef } from "react";
import classes from "./AddMovies.module.css";

const AddMovies = (props) => {
  const tittle = useRef("");
  const openingText = useRef("");
  const releaseDay = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const movie = {
      tittle: tittle.current.value,
      openingText: openingText.current.value,
      releaseDay: releaseDay.current.value,
    };

    props.getMovie(movie);

    tittle.current.value = "";
    openingText.current.value = "";
    releaseDay.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.add}>
        <div>
          <label htmlFor="tittle">Tittle</label>
          <input type="text" id="tittle" ref={tittle}></input>
        </div>
        <div>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea id="opening-text" rows="5" ref={openingText}></textarea>
        </div>
        <div>
          <label htmlFor="release-day">Release Day</label>
          <input type="text" id="htmlFor" ref={releaseDay}></input>
        </div>
        <div>
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
