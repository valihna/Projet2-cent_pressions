import { useState, useEffect } from "react";
import axios from "axios";
import { useBeerContext } from "../contexts/context";
import AddBasket from "./AddBasket";
import "./BasketCart.css";

import Button from "./Button";

function BasketCart() {
  const [carts, setCarts] = useState([]);
  const { baskets } = useBeerContext();

  useEffect(() => {
    const query = baskets.map((beer) => beer.beerId).join("|");

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/basket?beers=${query}`)
      .then((res) => setCarts(res.data))
      .catch((err) => console.error(err));
  }, [baskets]);

  return (
    <div className="basket-body">
      <div>
        <h2 className="basket">My Cart</h2>
      </div>

      {carts.map((beer) => (
        <div key={beer.id} className="beer-one">
          <div className="beer-one-left">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beer-one-right">
            <h3 className="name">{beer.name}</h3>
            <p className="price">${beer.price_per_liter}</p>
            <p className="subtotal">Subtotal</p>
          </div>
          <AddBasket beerId={beer.id} />
        </div>
      ))}
      <div className="basketFooter">
        <div className="total-container">
          <p className="total">Total</p>
          <span>$</span>
          <div className="down-footer">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCart;
