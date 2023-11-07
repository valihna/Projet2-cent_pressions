import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import BeerList from "./components/BeerList";

function App() {
  const [beers, setBeers] = useState([]);
  axios
    .get("http://localhost:3310/api/beers")
    .then((response) => {
      setBeers(response.data); // mise à jour de l'état beers avec les données récupérées
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div className="App">
      <BeerList beers={beers} />
    </div>
  );
}

export default App;
