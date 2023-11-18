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

  let groupedBeers;

  if (selectedTypes.length > 0) {
    groupedBeers = selectedTypes.reduce((grouped, type) => {
      const typeBeers = searchedBeers.filter((beer) => beer.type === type);
      return grouped.concat(typeBeers);
    }, []);
  } else {
    groupedBeers = searchedBeers.length > 0 ? searchedBeers : allBeers;
  }

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
