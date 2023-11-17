import { useLoaderData } from "react-router-dom";

import "./BasketCart.css";

import Button from "./Button";

function BasketCart() {
  const cart = useLoaderData();

  return (
    <div className="basket-body">
      <div>
        <h2 className="basket">My Cart</h2>
      </div>

      {cart.map((beer) => (
        <div key={beer.beerId} className="beer-one">
          <div className="beer-one-left">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beer-one-right">
            <h3 className="name">{beer.name}</h3>
            <p className="price">${beer.price_per_liter}</p>
            <p className="subtotal">Sous-total</p>
          </div>
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
