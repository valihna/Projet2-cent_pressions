import React from "react";
import "./BeerCard.css";

function BeerCard({ beer }) {
  return (
    <div className={`beer-item ${beer.type.toLowerCase()}-color`}>
      <div className="info_img">
        <img className="img" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="name_type">
        <h3 className="name">{beer.name}</h3>
        <p className="type">{beer.type}</p>
      </div>
      <p className="tagline">"{beer.tagline}"</p>
      <div className="abv_volume">
        <p className="abv">{beer.abv}%</p>
        <p className="volume">{beer.volume_value}L</p>
      </div>
      <p className="price">{beer.price_per_liter}$/L</p>
    </div>
  );
}

export default BeerCard;
