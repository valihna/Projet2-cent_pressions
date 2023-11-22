import { useState, useEffect } from "react";
import axios from "axios";
import { useBeerContext } from "../contexts/context";
import AddBasket from "./AddBasket";

import Button from "./Button";
import ArticlesCart from "./ArticlesCart";
import "./BasketCart.css";

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
        <div
          key={beer.id}
          className={`beer-one ${beer.type.toLowerCase()}-color`}
        >
          <div className="beer-one-left">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beer-one-right">
            <h3 className="name">{beer.name}</h3>
            <p className="price">{beer.price_per_liter} $/L</p>
            <ArticlesCart />
            <AddBasket beerId={beer.id} />
          </div>
        </div>
      ))}
      <div className="basket-footer">
        <div className="total-container">
          <div className="down-footer">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCart;
