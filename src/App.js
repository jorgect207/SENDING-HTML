import React, { useState, useEffect, useCallback } from "react";
import Card from "./Components/UX/Card";
import Top from "./Components/Top/Top";
import WrapMovie from "./Components/Content/WrapMovie";
import AddMovies from "./Components/Top/AddMovies";

// const DUMMY_ONJECT = [
//   {
//     tittle: "NARUTO",
//     episodes: 20,
//   },
//   {
//     tittle: "DBZ",
//     episodes: 100,
//   },
// ];

function App() {
  const [showUp, setShowUp] = useState(false);
  const [planets, setPlanets] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorP, setErrorP] = useState(null);

  const infoHandler = useCallback(async function () {
    setShowUp((show) => !show);
    setIsLoading(true);
    setErrorP(null);

    try {
      const response = await fetch(
        "https://react-html-d7064-default-rtdb.firebaseio.com/movie.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const DUMMY_ONJECT = await response.json();

      const movies = [];

      for (const key in DUMMY_ONJECT) {
        movies.push({
          id: key,
          tittle: DUMMY_ONJECT[key].tittle,
          openingText: DUMMY_ONJECT[key].openingText,
          releaseDay: DUMMY_ONJECT[key].releaseDay,
        });
      }
      console.log(movies.length);

      setPlanets(
        movies.map((x) => {
          return (
            <WrapMovie
              key={x.key}
              tittle={x.tittle}
              openingText={x.openingText}
              releaseDay={x.releaseDay}
            ></WrapMovie>
          );
        })
      );

      // setPlanets(
      //   DUMMY_ONJECT.results.map((x) => {
      //     return (
      //       <WrapMovie
      //         tittle={x.name}
      //         episodes={x.rotation_period}
      //         key={x.diameter}
      //       ></WrapMovie>
      //     );
      //   })
      // );
    } catch (error) {
      setErrorP(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    infoHandler();
  }, [infoHandler]);

  const showMovieAdded = async (movie) => {
    const response = await fetch(
      "https://react-html-d7064-default-rtdb.firebaseio.com/movie.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  let content;

  if (showUp) {
    content = planets;
  }
  if (!isLoading && !showUp) {
    content = "Not info yet";
  }
  if (isLoading && showUp) {
    content = "Loading info...";
  }
  if (errorP && showUp) {
    content = errorP;
  }

  const showUpDown = showUp ? "Show Down" : "Show Up";

  return (
    <React.Fragment>
      <Card>
        <AddMovies getMovie={showMovieAdded}></AddMovies>
      </Card>
      <Card>
        <Top onClick={infoHandler} onTittle={showUpDown}></Top>
      </Card>
      <Card>{content}</Card>
    </React.Fragment>
  );
}

export default App;
