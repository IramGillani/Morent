import { useState } from "react";
import { carsData } from "../data";
import MaxValueSlider from "./MaxRangeSlider";

const Sidebar = ({ title = "Type", cars, setCars }) => {
  const [price, setPrice] = useState(0);
  const min = 0;
  const max = 1000;
  const percent = ((price - min) / (max - min)) * 100;

  function filterCars(selector) {
    const selectedCars = carsData[selector];
    // (category) => carsData[category];
    // Object.keys(carsData).filter(
    //   (category) => category === selector.toLowerCase()
    // );
    setCars(selectedCars);
    console.log(selectedCars);
    return selectedCars;
  }

  return (
    <div className=" w-0 h-0 md:w-full md:h-dvh sidebar bg-[#f9f9f9] md:py-4 md:pl-2 md:pr-4">
      <h5 className="text-tertiary-text tracking-wider mb-4">{title}</h5>

      <ul className="flex flex-col gap-2 mb-6">
        {Object.entries(carsData).map(([category, arr]) => (
          <li className="flex items-center gap-2" key={category}>
            <label htmlFor={category}>
              <input
                type="checkbox"
                className="appearance-none w-5 h-5 border border-tertiary-text bg-transparent rounded-lg checked:bg-primary-blue checked:border-transparent custom-round"
                name={category}
                id={category}
                onClick={() => filterCars(category)}
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
                id={person}
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
      <div className="slider-wrapper relative mb-2">
        {" "}
        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={price}
          id="custom-slider"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="slider-value-display">
        <span className="display-value text-tertiary-text font-semibold">
          Max.${Number(price).toFixed(2)}
        </span>
      </div>
      {/* <MaxValueSlider /> */}
    </div>
  );
};

export default Sidebar;
