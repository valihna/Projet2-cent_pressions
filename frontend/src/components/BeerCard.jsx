import PropTypes from "prop-types";
import "./BeerCard.css";

function BeerCard({ name, picture }) {
  return (
    <div>
      <div>{name}</div>
      <div className="beerPicture">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default BeerCard;
