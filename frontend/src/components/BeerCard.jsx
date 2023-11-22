import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import AddBasket from "./AddBasket";
import "./BeerCard.css";
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { HiOutlineInformationCircle } from "react-icons/hi";

import FavButton from "./FavButton";

function BeerCard({ beer }) {
  const scrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  };

  return (
    <div className={`beer-item ${beer.type.toLowerCase()}-color`}>
      <div className="beer-item-top">
        <div className="info-img">
          <Link to={`/beers/${beer.id}`} onClick={scrollToTop}>
            <HiOutlineInformationCircle className="info" />
          </Link>
          <img className="img" src={beer.image_url} alt={beer.name} />
          <FavButton beerId={beer.id} />
        </div>
        <div className="name-type">
          <h3 className="name">{beer.name}</h3>
          <p className="type">{beer.type}</p>
        </div>
        <p className="tagline">"{beer.tagline}"</p>
        <div className="abv-volume">
          <p className="abv">{beer.abv}%</p>
          <p className="volume">{beer.volume_value}L</p>
        </div>
        <p className="price">{beer.price_per_liter}$/L</p>
      </div>
      <div className="beer-item-bot">
        <div className="add-basket-button">
          <AddBasket beerId={beer.id} />
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
