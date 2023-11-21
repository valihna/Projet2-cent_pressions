// eslint-disable-next-line import/no-extraneous-dependencies
import { TiShoppingCart } from "react-icons/ti";
import { useBeerContext } from "../contexts/context";

import "./AddBasket.css";

export default function AddBasket({ beerId }) {
  const { baskets, manageBasket } = useBeerContext();

  const inBasket = baskets.some((beer) => beer.beerId === beerId);

  return (
    <button type="button" className="cart" onClick={() => manageBasket(beerId)}>
      <div className="cart-title">
        {inBasket ? "REMOVE FROM CART" : "ADD TO CART"}
      </div>
      <TiShoppingCart color={inBasket ? "red" : "black"} />
    </button>
  );
}
