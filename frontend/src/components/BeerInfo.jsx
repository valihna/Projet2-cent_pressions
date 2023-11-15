import { useLoaderData } from "react-router-dom";
import "./BeerInfo.css";

import BeerInfoContent from "./BeerInfoContent";
import FavButton from "./FavButton";

function BeerInfo() {
  const selectedBeer = useLoaderData();

  return (
    <div className="beer-info">
      <h1>More informations</h1>
      <div
        className={`beer-info-title ${selectedBeer.type.toLowerCase()}-color`}
      >
        <div className="beer-info-title-left">
          <h2>{selectedBeer.name}</h2>
          <h3>"{selectedBeer.tagline}"</h3>
        </div>
        <img
          className="beer-info-image-mini"
          src={selectedBeer.image_url}
          alt={selectedBeer.name}
        />
        <div className="beer-info-fav">
          <FavButton beerId={selectedBeer.id} />
        </div>
      </div>
      <div className="beer-info-body">
        <div className="beer-info-body-left">
          <BeerInfoContent header="Type:" value={selectedBeer.type} />
          <BeerInfoContent
            header="Description:"
            value={selectedBeer.description}
          />
          <BeerInfoContent
            header="Brewery tips:"
            value={selectedBeer.brewers_tips}
          />
          <BeerInfoContent
            header="First brewed date:"
            value={selectedBeer.first_brewed}
          />
          <BeerInfoContent
            header="Brewed by:"
            value={selectedBeer.contributed_by.substring(
              0,
              selectedBeer.contributed_by.indexOf(" <")
            )}
          />
          <BeerInfoContent header="ABV:" value={selectedBeer.abv} />
          <BeerInfoContent header="IBU:" value={selectedBeer.ibu} />
          <BeerInfoContent
            header="Volume:"
            value={(selectedBeer.volume_value, selectedBeer.volume_unit)}
          />
          <BeerInfoContent
            header="Price per litre:"
            value={selectedBeer.price_per_liter}
            $
          />
        </div>
        <div className="beer-info-body-right">
          <img
            className="beer-info-image"
            src={selectedBeer.image_url}
            alt={selectedBeer.name}
          />
        </div>
      </div>
    </div>
  );
}

export default BeerInfo;
