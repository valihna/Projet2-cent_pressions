import React, { useState } from "react";
import "./ArticlesCart.css";

function ArticlesCart() {
  const counter = () => {
    const [count, setCount] = useState(1);

    const incrementCounter = () => {
      setCount(count + 1);
    };

    const decrementCounter = () => {
      if (count !== 1) {
        setCount(count - 1);
      }
    };

    return (
      <div>
        <p className="counter">Quantity: {count}</p>
        <button
          className="counter-button"
          type="button"
          onClick={incrementCounter}
        >
          +1
        </button>
        <button
          className="counter-button"
          type="button"
          onClick={decrementCounter}
        >
          -1
        </button>
      </div>
    );
  };

  return <div>{counter()}</div>;
}

export default ArticlesCart;
