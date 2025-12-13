import { useState, useEffect } from "react";
import { carsData } from "../data";
import Card from "./Card";

export default function CarGrid() {
  const itemsPerPage = 6;

  const getAllCars = () => {
    const categories = Object.keys(carsData);

    let allCars = [];

    categories.forEach((category) => {
      carsData[category].forEach((car) => {
        allCars.push({ ...car, category });
      });
    });

    return allCars;
  };

  // shuffle array for randomness
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const [cars, setCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const [likedCars, setLikedCars] = useState(
    Object.values(carsData)
      .flat()
      .filter((car) => car.favourite)
      .map((car) => car.name) // <-- store only names
  );

  const toggleFavourite = (name) => {
    setLikedCars(
      (prev) =>
        prev.includes(name)
          ? prev.filter((item) => item !== name) // remove if unliked
          : [...prev, name] // add if liked
    );
  };

  useEffect(() => {
    const shuffled = shuffle(getAllCars());
    setCars(shuffled);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  return (
    <>
      {/* Grid */}
      <div
        className="grid 
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
        gap-6 py-4"
      >
        {cars.slice(0, visibleCount).map((car) => (
          <Card
            key={car.id}
            {...car}
            isFavourite={likedCars.includes(car.name)}
            toggleFavourite={() => toggleFavourite(car.name)}
          />
        ))}
      </div>

      {/* SHOW MORE button */}
      {visibleCount < cars.length && (
        <div className="flex items-center justify-center relative mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
          >
            Show More
          </button>
          <span className="text-tertiary-text font-medium absolute right-0">
            {cars.length} Car
          </span>
        </div>
      )}
    </>
  );
}
