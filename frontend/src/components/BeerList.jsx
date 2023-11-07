import React from "react";

function BeerList({ beers }) {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <div key={beer.id} className="beer-item">
          <h3>{beer.name}</h3>
          <img src={beer.image_url} alt={beer.name} />
        </div>
      ))}
    </div>
  );
}

export default BeerList;
