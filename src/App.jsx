import BookingInfo from "./BookingInfo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./Header";
import MainSection from "./MainSection";
import { carsData } from "./data";
import { useState, useEffect, useRef } from "react";

function App() {
  const categories = Object.keys(carsData);

  const perPage = 6;
  const [carIndex, setCarIndex] = useState(9);
  const observer = useRef(null);

  const result = [];
  for (let i = 0; i < carIndex; i++) {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const cars = carsData[randomCategory];

    const randomCar = cars[Math.floor(Math.random() * cars.length)];

    result.push({
      category: randomCategory,
      car: randomCar,
    });
  }
  const [cars, setCars] = useState(result);
  useEffect(() => {
    setCars(result);
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex md:grid grid-cols-4 w-full bg-tertiary-text ">
        <Sidebar cars={cars} setCars={() => setCars} />
        <div className="py-2 px-4 sm:py-4 sm:px-6 col-span-3">
          <Header />
          <BookingInfo />
          <MainSection cars={cars} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
