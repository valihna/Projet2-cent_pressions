import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);

    // Appel de la fonction de filtrage avec la valeur de recherche
    onSearch(updatedValue);
  };

  return (
    <input
      type="text"
      placeholder="Recherchez une bière par nom..."
      className="search-bar"
      onChange={handleChange}
      value={value}
    />
  );
}

export default SearchBar;
