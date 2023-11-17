import "./SideBar.css";
import React from "react";
import Type from "./Types";

function SideBar({ onFilterChange }) {
  const types = ["Braun", "Black", "IPA", "Abbey", "Blonde"];

  const handleTypeFilterChange = (type, isChecked) => {
    onFilterChange(type, isChecked);
  };

  return (
    <div className="side">
      <div className="all_input">
        <h3 className="types_of_beer">types of beers :</h3>
        {types.map((type) => (
          <Type
            key={type}
            type={type}
            onFilterChange={handleTypeFilterChange}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;