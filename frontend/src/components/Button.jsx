import React from "react";
import "./Button.css";

function Button() {
  return (
    <div>
      <input className="validate" type="button" value="Validate the Basket" />
      {/* <button onClick={handleClick}></button> */}
    </div>
  );
}

export default Button;
