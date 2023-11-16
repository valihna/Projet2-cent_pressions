import React, { useState } from "react";
/* import "./Types.css"; */
import "./FilterOption.css";

function FilterOption({ label, onFilterChange }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onFilterChange(label, newCheckedState);
  };

  return (
    <div className="filter-option">
      <label className="label" htmlFor={`${label.toLowerCase()}-checkbox`}>
        <input
          type="checkbox"
          className="filter-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id={`${label.toLowerCase()}-checkbox`}
        />
        {label}
      </label>
    </div>
  );
}

export default FilterOption;
