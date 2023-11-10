import React from "react";
import BeerCard from "./BeerCard";
import "./BeerList.css";

function BeerList({ beers }) {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
