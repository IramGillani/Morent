import { IoHeart } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";
import Button from "./Button";
const Card = ({
  img = "./car1.png",
  car = "Koenigsegg",
  type = "sport",
  liked = true,
  petrol = 90,
  capacity = 2,
  rent = 99567,
  actualRent = 100,
  tech = "Manual",
  carDetail = "a white car",
}) => {
  return (
    <>
      <div className="px-[31px] py-[11px] rounded-lg shadow-2xl w-full md:w-1/3 bg-white">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-primary-text">{car}</h2>
            <span className="text-tertiary-text font-bold">{type}</span>
          </div>
          <IoHeart className={`${liked} && text-liked text-xl `} />
        </header>
        <img src={img} alt={carDetail} className="object-cover object-center" />
        <div className="flex gap-2 mb-4 mt-4 text-secondry-text justify-between">
          <div className="flex gap-0.5 items-center">
            <FaGasPump />
            <span>{petrol}L</span>
          </div>
          <div className="flex gap-0.5 items-center">
            {tech === "Manual" ? <TbSteeringWheel /> : <TbAutomaticGearbox />}
            <span>{tech}</span>
          </div>
          <div className="flex gap-0.5 items-center">
            <BsFillPeopleFill />
            {capacity}
          </div>
        </div>
        <footer className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <h3>
              ${rent.toLocaleString()}
              <span className="text-tertiary-text">/ day</span>
            </h3>
            {/* <span>{actualRent ? actualRent : 'Not defined'}</span> */}
            <span className="text-secondry-text line-through">
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
