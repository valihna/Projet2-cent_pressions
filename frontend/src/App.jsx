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

  let groupedBeers;

  if (selectedTypes.length > 0) {
    groupedBeers = selectedTypes.reduce((grouped, type) => {
      const typeBeers = allBeers.filter((beer) => beer.type === type);
      return grouped.concat(typeBeers);
    }, []);
  } else {
    groupedBeers = allBeers;
  }

  return (
    <div>
      <NavBar />
      <Title />

      <div className="app">
        <BeerList beers={groupedBeers} />
        <SideBar onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
