import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BeerList from "./components/BeerList";
import Title from "./components/Title";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const allBeers = useLoaderData();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchedBeers, setSearchedBeers] = useState([]);

  const handleFilterChange = (type, isChecked) => {
    if (isChecked) {
      setSelectedTypes((prevTypes) => [...prevTypes, type]);
    } else {
      setSelectedTypes((prevTypes) =>
        prevTypes.filter((prevType) => prevType !== type)
      );
    }
  };
  const handleSearch = (searchValue) => {
    const filteredBeers = allBeers.filter((beer) =>
      beer.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedBeers(filteredBeers);
  };

  const getGroupedBeers = () => {
    let filteredBeers;

    if (searchedBeers.length > 0) {
      filteredBeers = searchedBeers;
    } else {
      filteredBeers = allBeers;
    }

    if (selectedTypes.length > 0) {
      // Filtrer par types sélectionnés, même si une recherche a été effectuée
      filteredBeers = filteredBeers.filter((beer) =>
        selectedTypes.includes(beer.type)
      );
    }

    if (selectedTypes.length > 1) {
      // Si plusieurs types sont sélectionnés, regrouper par type
      const groupedByType = {};
      filteredBeers.forEach((beer) => {
        if (!groupedByType[beer.type]) {
          groupedByType[beer.type] = [];
        }
        groupedByType[beer.type].push(beer);
      });

      // Concaténer les groupes dans l'ordre alphabétique des types
      const typesInOrder = selectedTypes.sort();
      filteredBeers = typesInOrder.flatMap((type) => groupedByType[type]);
    }

    return filteredBeers;
  };

  const groupedBeers = getGroupedBeers();
  return (
    <div>
      <NavBar onSearch={handleSearch} />

      <Title />

      <div className="app">
        <BeerList beers={groupedBeers} />
        <SideBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
