import { IoHeart } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";
import { useState } from "react";
import { carsData } from "@/data";
import Button from "./Button";
const Card = ({
  img = "./car1.png",
  name = "Koenigsegg",
  category = "sport",
  favourite = true,
  alt,
  fuelTankCapacity = 90,
  seatingCapacity = 2,
  rent = 99567,
  actualRent = 100,
  transmission = "Manual",
}) => {
  const [likedCars, setLikedCars] = useState(
    Object.values(carsData)
      .flat()
      .filter((car) => car.favourite)
      .map((car) => car.name) // <-- store only names
  );

  const isFavourite = likedCars.includes(name);

  const toggleFavourite = (name) => {
    setLikedCars(
      (prev) =>
        prev.includes(name)
          ? prev.filter((item) => item !== name) // remove if unliked
          : [...prev, name] // add if liked
    );
  };
  return (
    <>
      <div className="px-[31px] py-[11px] rounded-lg shadow-2xl w-full  bg-white">
        <header className="flex justify-between items-center">
          <div>
            <h3 className="text-primary-text">{name}</h3>
            <span className="text-tertiary-text font-bold">{category}</span>
          </div>
          <IoHeart
            className={`${
              likedCars.includes(name) ? "text-liked" : "text-tertiary-text"
            } text-xl `}
            onClick={() => toggleFavourite(name)}
          />
        </header>
        <img
          src={img}
          alt={alt}
          className="object-cover object-center w-full h-52 "
        />
        <div className="flex gap-2 mb-4 mt-4 text-secondry-text justify-between">
          <div className="flex gap-0.5 items-center">
            <FaGasPump />
            <span>{fuelTankCapacity}L</span>
          </div>
          <div className="flex gap-0.5 items-center">
            {transmission === "Manual" ? (
              <TbSteeringWheel />
            ) : (
              <TbAutomaticGearbox />
            )}
            <span>{transmission}</span>
          </div>
          <div className="flex gap-0.5 items-center">
            <BsFillPeopleFill />
            {seatingCapacity}
          </div>
        </div>
        <footer className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-md sm:text-lg md:text-xl text-primary-text">
              ${rent.toLocaleString()}
              <span className="text-tertiary-text text-sm lowercase">
                / day
              </span>
            </h3>
            {/* <span>{actualRent ? actualRent : 'Not defined'}</span> */}
            <span className="text-secondry-text line-through lowercase text-[12px] lg:text-sm">
              ${actualRent ?? ""}/ day
            </span>
          </div>

          <Button />
        </footer>
      </div>
    </>
  );
};

export default Card;
