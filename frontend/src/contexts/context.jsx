import { createContext, useContext, useEffect, useState } from "react";

const BeerContext = createContext();

export const useBeerContext = () => useContext(BeerContext);

export function BeerProvider({ children }) {
  const initialFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [favorites, setFavorites] = useState(initialFavorites);

  const initialBasket = localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [];

  const [baskets, setBaskets] = useState(initialBasket);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(baskets));
  }, [baskets]);

  const manageFavorites = (beerId) => {
    if (favorites.includes(beerId)) {
      setFavorites(favorites.filter((id) => id !== beerId));
    } else {
      setFavorites([...favorites, beerId]);
    }
  };

  const manageBasket = (beerId) => {
    if (baskets.some((beer) => beer.beerId === beerId)) {
      // peuton passer plusieurs props?(price, name,price_per_liter)
      setBaskets(baskets.filter((beer) => beer.beerId !== beerId));
    } else {
      setBaskets([
        ...baskets,
        {
          beerId,
        },
      ]);
    }
  };

  return (
    <BeerContext.Provider
      value={{ favorites, manageFavorites, baskets, manageBasket }}
    >
      {children}
    </BeerContext.Provider>
  );
}
