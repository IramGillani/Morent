import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { carsData, navLinks } from "../data";
import { useMemo } from "react";
import { useFavourites } from "@/context/FavouritesContext";

const Navbar = ({ filter, query, setQuery, setCars, setNoResult }) => {
  const { likedCars, favouriteCount, hasNewItem } = useFavourites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const results = useMemo(() => {
    if (!query) return [];
    return Object.entries(carsData).flatMap(([categoryName, cars]) =>
      cars
        .filter((car) => car.name.toLowerCase().includes(query.toLowerCase()))
        .map((car) => ({
          category: categoryName,
          ...car,
        }))
    );
  }, [query]);

  const handleSearch = () => {
    if (results.length !== 0) {
      setCars(results);
      setNoResult(false);
    } else {
      setCars([]);
      setNoResult(true);
    }
  };
  const showFavourites = () => {
    setCars(likedCars);
    setNoResult(likedCars.length === 0);
  };

  return (
    <>
      <nav>
        <a href="#" className="pl-4 md:pl-0">
          <h2>Morent</h2>
        </a>
        <label htmlFor="search" className="relative w-1/2 hidden sm:inline">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search something here"
            className="rounded-3xl w-full pr-2 pl-10 py-2 outline-none  border-2 border-[#C3D4E9]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <BiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-text "
            onClick={handleSearch}
          />
          <TbAdjustmentsHorizontal
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-text "
            onClick={() => filter((prev) => !prev)}
          />
        </label>
        <FaBars
          className="md:hidden mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <ul className=" w-full h-dvh py-6 md:hidden">
            {navLinks.map(({ icon, linkTitle, id }) => (
              <li
                className=" not-last:mb-4  px-6 translate-y-1/2"
                key={id}
                onClick={() => linkTitle === "Favourites" && showFavourites()}
              >
                <a href="#" className="flex items-center gap-4 w-full">
                  {" "}
                  {icon}
                  <span className="font-semibold">{linkTitle}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="items-center gap-4 hidden md:flex">
          <ul className=" flex justify-between items-center gap-4 ">
            {navLinks.map(({ icon, id, linkTitle }) => (
              <li
                className="nav-link-container"
                key={id}
                onClick={() => linkTitle === "Favourites" && showFavourites()}
              >
                <a href="#">
                  {icon}
                  {linkTitle === "Favourites" && hasNewItem && (
                    <span className="notify-color"></span>
                  )}
                </a>
              </li>
            ))}

            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
              alt="Profile image of a person"
              className="w-10 h-10 rounded-full  object-cover object-center"
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
