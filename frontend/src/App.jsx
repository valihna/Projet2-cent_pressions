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

  const handleFilterChange = (type, isChecked) => {
    if (isChecked) {
      setSelectedTypes((prevTypes) => [...prevTypes, type]);
    } else {
      setSelectedTypes((prevTypes) =>
        prevTypes.filter((prevType) => prevType !== type)
      );
    }
  };

  const getSelection = () => {
    const selection = allBeers.filter(
      (beer) => selectedTypes.length === 0 || selectedTypes.includes(beer.type)
    );

    return selectedTypes.length > 0
      ? selection.sort((a, b) => {
          return a.type > b.type ? -1 : 1;
        })
      : selection;
  };

  return (
    <div>
      <NavBar />
      <Title />

      <div className="app">
        <BeerList beers={getSelection()} />
        <SideBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
