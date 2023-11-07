import { useLoaderData } from "react-router-dom";
import "./BeerInfo.css";

function BeerInfo() {
  const selectedBeer = useLoaderData();

  return (
    <div className="beer-info">
      <h1>More informations</h1>
      <div className="beer-info-body">
        <div className="beer-info-body-left">
          <div className="beer-info-title">
            <h2>{selectedBeer.name}</h2>
            <h3>"{selectedBeer.tagline}"</h3>
          </div>
          <table className="beer-info-table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{selectedBeer.name}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{selectedBeer.type}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{selectedBeer.description}</td>
              </tr>
              <tr>
                <td>First brewed date:</td>
                <td>{selectedBeer.first_brewed}</td>
              </tr>
              <tr>
                <td>Brewery tips:</td>
                <td>{selectedBeer.brewers_tips}</td>
              </tr>
              <tr>
                <td>ABV:</td>
                <td>{selectedBeer.abv}% vol.</td>
              </tr>
              <tr>
                <td>IBU:</td>
                <td>{selectedBeer.ibu}</td>
              </tr>
              <tr>
                <td>Volume:</td>
                <td>
                  {selectedBeer.volume_value} {selectedBeer.volume_unit}
                </td>
              </tr>
              <tr>
                <td>Price per liter:</td>
                <td>{selectedBeer.price_per_liter} $</td>
              </tr>
              <tr>
                <td>Brewed by:</td>
                <td>{selectedBeer.contributed_by}</td>
              </tr>
            </tbody>
          </table>
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
