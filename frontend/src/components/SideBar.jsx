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
      <div className="tout-input">
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
