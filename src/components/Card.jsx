import { IoHeart } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";
import { useFavourites } from "@/context/FavouritesContext";
import { useState } from "react";
import { carsData } from "@/data";
import Button from "./Button";
const Card = ({ car }) => {
  const {
    id,
    img,
    name,
    category,
    fuelTankCapacity,
    seatingCapacity,
    rent,
    alt,
    actualRent,
    transmission,
  } = car;

  const { likedCars, toggleFavourite } = useFavourites();

  const isFavourite = likedCars.some((item) => item.id === id);
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
              isFavourite ? "text-liked" : "text-tertiary-text"
            } text-xl `}
            onClick={() => toggleFavourite(car)}
          />
        </header>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="object-cover object-center w-full aspect-4/3 min-w-[180px]"
        />

        <div className="flex gap-2 mb-4 mt-4 text-secondry-text justify-between">
          <div className="flex gap-0.5 items-center text-nowrap">
            <FaGasPump />
            <span>{fuelTankCapacity}L</span>
          </div>
          <div className="flex gap-0.5 items-center text-nowrap">
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
