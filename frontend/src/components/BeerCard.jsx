import React, { useEffect } from "react";
import "./BeerCard.css";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line import/no-extraneous-dependencies
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
      <div className="info_img">
        <Link to={`/beers/${beer.id}`} onClick={scrollToTop}>
          <HiOutlineInformationCircle className="info" />
        </Link>
        <img className="img" src={beer.image_url} alt={beer.name} />
        <FavButton beerId={beer.id} />
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
