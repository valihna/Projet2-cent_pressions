// eslint-disable-next-line import/no-extraneous-dependencies
import { TiShoppingCart } from "react-icons/ti";
import { useBeerContext } from "../contexts/context";

export default function AddBasket({ beerId }) {
  const { baskets, manageBasket } = useBeerContext();

  return (
    <button type="button" className="cart" onClick={() => manageBasket(beerId)}>
      <div>ADD TO CART</div>
      <TiShoppingCart
        color={baskets.some((beer) => beer.beerId === beerId) ? "red" : "black"}
      />
    </button>
  );
}
