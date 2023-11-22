import React from "react";
import FilterOption from "./FilterOption";
import "./SideBar.css";

function SideBar({ onFilterChange }) {
  const types = ["Braun", "Black", "IPA", "Abbey", "Blonde"];

  return (
    <div className="side">
      <div className="all-input">
        <h3 className="filter-title">Favorites beers :</h3>
        <FilterOption label="Favorites" onFilterChange={onFilterChange} />
        <h3 className="filter-title">Types of beers :</h3>
        {types.map((type) => (
          <FilterOption
            key={type}
            label={type}
            onFilterChange={onFilterChange}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
