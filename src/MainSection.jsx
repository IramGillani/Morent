import { carsData } from "./data";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [cars, setCars] = useState([]);

  function getRandomCars(count = 6) {
    const categories = Object.keys(carsData);
    const result = [];

    for (let i = 0; i < count; i++) {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const cars = carsData[randomCategory];

      const randomCar = cars[Math.floor(Math.random() * cars.length)];

      result.push({
        category: randomCategory,
        car: randomCar,
      });
    }

    return result;
  }

  useEffect(() => {
    setCars(getRandomCars(6)); // show 6 random items
  }, []);

  return (
    <>
      <div>
        {cars.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div className="text-xl text-yellow-600">{item.price}</div>
            <div>{carsData}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainSection;
