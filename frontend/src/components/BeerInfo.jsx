import PropTypes from "prop-types";
import "./BeerInfo.css";

function BeerInfo({ name, picture }) {
  return (
    <div className="beerInfo">
      <div className="background" />
      <div className="beerInfoBody">
        <img className="beerInfoImage" src={picture} alt={name} />
        <div>{name}</div>
      </div>
    </div>
  );
}

BeerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default BeerInfo;
