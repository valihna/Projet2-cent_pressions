import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useBeerContext } from "../contexts/context";

import "./FavButton.css";

function FavButton({ beerId }) {
  const { favorites, manageFavorites } = useBeerContext();

  const isFavorite = favorites.includes(beerId);
  return (
    <button
      type="button"
      className="fav"
      onClick={() => manageFavorites(beerId)}
    >
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}

export default FavButton;
