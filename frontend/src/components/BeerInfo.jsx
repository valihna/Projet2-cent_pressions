import { useLoaderData } from "react-router-dom";
import "./BeerInfo.css";

function BeerInfo() {
  const selectedBeer = useLoaderData();

  return (
    <div className="beer-info">
      <h1>More informations</h1>
      <div className={`beer-info-title bg-${selectedBeer.type}`}>
        <div className="beer-info-title-left">
          <h2>{selectedBeer.name}</h2>
          <h3>"{selectedBeer.tagline}"</h3>
        </div>
        <img
          className="beer-info-image-mini"
          src={selectedBeer.image_url}
          alt={selectedBeer.name}
        />
      </div>
      <div className="beer-info-body">
        <div className="beer-info-body-left">
          <div className="beer-info-content">
            <div className="beer-info-content-header">Type :</div>
            <div className="beer-info-content-value">{selectedBeer.type}</div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">Description:</div>
            <div className="beer-info-content-value">
              {selectedBeer.description}
            </div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">Brewery tips:</div>
            <div className="beer-info-content-value">
              {selectedBeer.brewers_tips}
            </div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">First brewed date:</div>
            <div className="beer-info-content-value">
              {selectedBeer.first_brewed}
            </div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">Brewed by:</div>
            <div className="beer-info-content-value">
              {selectedBeer.contributed_by.substring(
                0,
                selectedBeer.contributed_by.indexOf(" <")
              )}
            </div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">ABV:</div>
            <div className="beer-info-content-value">{selectedBeer.abv}</div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">IBU:</div>
            <div className="beer-info-content-value">{selectedBeer.ibu}</div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">Volume:</div>
            <div className="beer-info-content-value">
              {selectedBeer.volume_value} {selectedBeer.volume_unit}
            </div>
          </div>
          <div className="beer-info-content">
            <div className="beer-info-content-header">Price per liter:</div>
            <div className="beer-info-content-value">
              {selectedBeer.price_per_liter} $
            </div>
          </div>
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
