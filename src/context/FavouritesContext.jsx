import { createContext, useContext, useState } from "react";
import { carsData } from "@/data";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const initialLikedCars = Object.entries(carsData).flatMap(
    ([category, cars]) =>
      cars.filter((car) => car.favourite).map((car) => ({ ...car, category }))
  );

  const [likedCars, setLikedCars] = useState(initialLikedCars);
  const [hasNewItem, setHasNewItem] = useState(false);

  const favouriteCount = likedCars.length;

  const toggleFavourite = (car) => {
    setLikedCars((prev) => {
      const isFavourite = prev.some((item) => item.id === car.id);
      setHasNewItem(!isFavourite);

      return isFavourite
        ? prev.filter((item) => item.id !== car.id)
        : [...prev, car];
    });
  };

  return (
    <FavouritesContext.Provider
      value={{
        likedCars,
        favouriteCount,
        toggleFavourite,
        hasNewItem,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
