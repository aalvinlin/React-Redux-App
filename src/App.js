import React from "react";

import Header from "./components/Header";
import GenusContainer from "./components/GenusContainer";
import SearchResults from "./components/SearchResults";

import "./App.css";

const App = () => {

  const solanum = ["nightshade", "tomatoes", "eggplant", "potatoes"];
  const capsicum = ["peppers"];

  return (
    <div>
      <Header/>
      <GenusContainer genus="Solanum" genusPlants={solanum} />
      <GenusContainer genus="Capsicum" genusPlants={capsicum} />
      <SearchResults />
    </div>
  )

};

export default App;