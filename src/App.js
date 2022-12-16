import React, { useState } from "react";
import Card from "./Components/UX/Card";
import Top from "./Components/Top/Top";
import WrapMovie from "./Components/Content/WrapMovie";

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

  async function infoHandler() {
    setShowUp((show) => !show);
    setIsLoading(true);

    const response = await fetch("https://swapi.dev/api/planets/");
    const DUMMY_ONJECT = await response.json();

    setPlanets(
      DUMMY_ONJECT.results.map((x) => {
        return (
          <WrapMovie tittle={x.name} episodes={x.rotation_period}></WrapMovie>
        );
      })
    );
    setIsLoading(false);
  }

  const showUpDown = showUp ? "SHOW DOWN" : "SHOW UP";

  return (
    <React.Fragment>
      <Card>
        <Top onClick={infoHandler} onTittle={showUpDown}></Top>
      </Card>
      <Card>
        {showUp ? planets : !isLoading && "No Info Yet"}
        {isLoading && "Loading info..."}
      </Card>
    </React.Fragment>
  );
}

export default App;
