import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useBeerContext } from "../contexts/context";
import "./FavButton.css";

function FavButton({ beerId }) {
  const { favorites, manageFavorites } = useBeerContext();

  return (
    <button
      type="button"
      className="fav"
      onClick={() => manageFavorites(beerId)}
    >
      {favorites.includes(beerId) ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}

export default FavButton;
