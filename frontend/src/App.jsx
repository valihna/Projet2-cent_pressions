import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BeerList from "./components/BeerList";
import Title from "./components/Title";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useBeerContext } from "./contexts/context";
import "./App.css";

function App() {
  const allBeers = useLoaderData();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchedBeers, setSearchedBeers] = useState([]);
  const { favorites } = useBeerContext();

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
      if (selectedTypes.length > 1) {
        const groupedByType = {};
        filteredBeers.forEach((beer) => {
          if (!groupedByType[beer.type]) {
            groupedByType[beer.type] = [];
          }
          groupedByType[beer.type].push(beer);
        });

        const typesInOrder = selectedTypes.sort();
        filteredBeers = typesInOrder.flatMap((type) => groupedByType[type]);
      } else {
        filteredBeers = filteredBeers.filter((beer) =>
          selectedTypes.includes(beer.type)
        );
      }
    }

    return filteredBeers;
  };

  const getSelection = () => {
    const groupedBeers = getGroupedBeers();

    if (searchedBeers.length === 0 && selectedTypes.length === 0) {
      return allBeers.sort((a, b) => (b.name > a.name ? -1 : 1));
    }

    let filteredBeers;

    if (selectedTypes.length > 1) {
      const groupedByType = {};
      allBeers.forEach((beer) => {
        if (!groupedByType[beer.type]) {
          groupedByType[beer.type] = [];
        }
        groupedByType[beer.type].push(beer);
      });
      const typesInOrder = selectedTypes.sort();
      filteredBeers = typesInOrder.flatMap((type) => groupedByType[type]);
    } else {
      filteredBeers = searchedBeers.length > 0 ? searchedBeers : allBeers;
    }

    let selection;

    if (selectedTypes.includes("favorites")) {
      selection =
        favorites.length > 0
          ? allBeers.filter((beer) => favorites.includes(beer.id))
          : [];
    } else {
      selection = filteredBeers.filter(
        (beer) =>
          beer && (favorites.includes(beer.id) || groupedBeers.includes(beer))
      );
    }

    if (selectedTypes.length > 1) {
      return selection.sort((a, b) => (a.type > b.type ? -1 : 1));
    }

    return selection.sort((a, b) => (b.name > a.name ? -1 : 1));
  };

  return (
    <div>
      <NavBar onSearch={handleSearch} />

      <Title />
      <div className="app">
        <BeerList beers={getSelection()} />
        <SideBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
