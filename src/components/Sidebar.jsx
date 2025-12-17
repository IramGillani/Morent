import { useEffect, useRef, useState } from "react";
import { carsData } from "../data";

const Sidebar = ({ title = "Type", setCars }) => {
  const [price, setPrice] = useState(100);
  const min = 0;
  const max = 100;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState(null);

  const rangeRef = useRef(null);

  useEffect(() => {
    let allCars = Object.entries(carsData).flatMap(([category, cars]) =>
      cars.map((car) => ({
        ...car,
        category,
      }))
    );
    console.log(allCars);

    if (selectedCategory) {
      allCars = allCars.filter((car) => car.category === selectedCategory);
    }

    if (selectedCapacity) {
      allCars = allCars.filter(
        (car) => car.seatingCapacity === selectedCapacity
      );
    }

    allCars = allCars.filter((car) => car.rent <= price);

    setCars(allCars);
    console.log(allCars);
  }, [selectedCategory, selectedCapacity, price]);

  const handlePriceBg = () => {
    const el = rangeRef.current;
    if (!el) return;

    const percent = ((el.value - min) / (max - min)) * 100;
    el.style.setProperty("--value", `${percent}%`);
  };
  useEffect(() => {
    handlePriceBg();
  }, []);
  return (
    <div
      className={` w-0 h-0 md:w-full md:h-dvw sidebar md:py-4 md:pl-2 md:pr-4 sticky bg-white my-2 transform transition-transform duration-150 ease-in-out`}
    >
      <h5 className="text-tertiary-text tracking-wider mb-4">{title}</h5>

      <ul className="flex flex-col gap-2 mb-6">
        {Object.entries(carsData).map(([category, arr]) => (
          <li className="flex items-center gap-2" key={category}>
            <label htmlFor={category}>
              <input
                type="checkbox"
                className={`appearance-none w-5 h-5 border border-tertiary-text bg-transparent rounded-lg checked:bg-primary-blue checked:border-transparent custom-round`}
                name={category}
                id={category}
                checked={selectedCategory === category}
                onChange={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
              />
            </label>
            <div className="flex items-center gap-2">
              <span className="text-secondry-text uppercase font-semibold">
                {category}
              </span>
              <span className="text-tertiary-text">({arr.length})</span>
            </div>
          </li>
        ))}
      </ul>
      <h5 className="text-tertiary-text tracking-wider mb-4">Capacity</h5>
      <ul className="flex flex-col gap-2 mb-6">
        {[2, 4, 6, 8].map((person) => (
          <li className="flex items-center gap-2" key={person}>
            <label htmlFor={person}>
              <input
                type="checkbox"
                className="appearance-none w-5 h-5 border border-tertiary-text bg-transparent rounded-lg checked:bg-primary-blue checked:border-transparent custom-round"
                name={person}
                value={person}
                id={person}
                checked={selectedCapacity === person}
                onChange={() =>
                  setSelectedCapacity(
                    selectedCapacity === person ? null : person
                  )
                }
              />
            </label>
            <div className="flex items-center gap-2">
              <span className="text-secondry-text font-semibold">
                {person} {person === 8 ? "or More" : "Person"}
              </span>
              {
                Object.values(carsData)
                  .flatMap((arr) => arr) // merge all arrays into one
                  .filter((car) => car.seatingCapacity === person).length
              }
            </div>
          </li>
        ))}
      </ul>
      <h5 className="text-tertiary-text tracking-wider mb-4">Price</h5>
      <div className=" relative mb-2 ">
        {" "}
        <input
          ref={rangeRef}
          type="range"
          min={min}
          max={max}
          step="1"
          value={price}
          onChange={(e) => {
            setPrice(Number(e.target.value));
            handlePriceBg();
          }}
        />
      </div>

      <div className="slider-value-display">
        <span className="display-value text-tertiary-text font-semibold">
          Max.${Number(price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
