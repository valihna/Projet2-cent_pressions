import React, { useState } from "react";
import "./Types.css";

function Type({ type, onFilterChange }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onFilterChange(type, newCheckedState);
  };

  return (
    <div className="input-type">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id={`${type}-checkbox`}
      />
      <label className="label" htmlFor={`${type}-checkbox`}>
        {type}
      </label>
    </div>
  );
}

export default Type;
