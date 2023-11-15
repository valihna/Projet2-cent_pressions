import { useLoaderData } from "react-router-dom";

import "./BasketCart.css";

import ItemCart from "./ItemCart";
import Button from "./Button";

// const beersInBasket = [
//   {
//     beerId: 1,
//     quantity: 1,
//   },
//   {
//     beerId: 5,
//     quantity: 1,
//   },
//   {
//     beerId: 25,
//     quantity: 1,
//   },
// ];

// Mettre en place un state pour mémoriser les bières dans le panier
function BasketCart() {
  const cart = useLoaderData();

  return (
    <div className="">
      <div>
        <ItemCart />
        <Button />
      </div>
      <div>
        <h2 className="basket">My Cart</h2>
      </div>

      {cart.map((beer) => (
        <div key={beer.beerId} className="beerOne">
          <h3 className="name">{beer.name}</h3>
          <p className="price">${beer.price_per_liter}</p>
          <p className="sous-total">Sous-total</p>
          <img src={beer.image_url} alt={beer.name} />
        </div>
      ))}

      <div className="footer">
        <p className="number-of-items">Number of items</p>
        <p className="total">Total</p>
      </div>
    </div>
  );
}

export default BasketCart;

// Mettre en place un useEffect pour charger en automatique les données relatives au bière
// Pour se faire, utiliser axios
// Mettre en place un route backend /basket?beers=1|5|25 (id venant de la variable beerInbasket)

// En backend sur ma route, je récupère req.query.beers (eq. 1|5|25). Utiliser split('|') pour récupérer un tableau d'id puis faire une requete select ..... from .... where id IN ?, [montableau]
// SELECT * FROM beer WHERE id in (1,5,25) LIMIT 100
