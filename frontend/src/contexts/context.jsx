import { createContext, useContext, useEffect, useState } from "react";

const BeerContext = createContext();

export const useBeerContext = () => useContext(BeerContext);

export function BeerProvider({ children }) {
  const initialFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const manageFavorites = (beerId) => {
    if (favorites.includes(beerId)) {
      setFavorites(favorites.filter((id) => id !== beerId));
    } else {
      setFavorites([...favorites, beerId]);
    }
  };

  return (
    <BeerContext.Provider value={{ favorites, manageFavorites }}>
      {children}
    </BeerContext.Provider>
  );
}
