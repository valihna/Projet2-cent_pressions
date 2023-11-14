// App.jsx

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BeerList from "./components/BeerList";
import Title from "./components/Title";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const allBeers = useLoaderData();
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleFilterChange = (type, isChecked) => {
    if (isChecked) {
      // Ajouter le type sélectionné
      setSelectedTypes((prevTypes) => [...prevTypes, type]);
    } else {
      // Retirer le type désélectionné
      setSelectedTypes((prevTypes) =>
        prevTypes.filter((prevType) => prevType !== type)
      );
    }
  };

  // Filtrer les bières en fonction des types sélectionnés
  const filteredBeers =
    selectedTypes.length > 0
      ? allBeers.filter((beer) => selectedTypes.includes(beer.type))
      : allBeers;

  return (
    <div>
      <Title />

      <div className="app">
        <BeerList beers={filteredBeers} />
        <SideBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
