import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import BeerList from "./components/BeerList";
import Title from "./components/Title";

function App() {
  const [beers, setBeers] = useState([]);
  axios
    .get("http://localhost:3310/api/beers")
    .then((response) => {
      setBeers(response.data);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <Title />
      <div className="App">
        <BeerList beers={beers} />
      </div>
    </div>
  );
}

export default App;
