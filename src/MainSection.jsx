import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BookingInfo from "./BookingInfo";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
const MainSection = ({ openSidebar }) => {
  const [cars, setCars] = useState([]);

  return (
    <>
      {" "}
      <main className="grid grid-cols-4 w-full bg-[#dee3ec]">
        {openSidebar && <Sidebar cars={cars} setCars={setCars} />}

        <div
          className={`py-2 px-4 sm:py-4 sm:px-6 w-full col-span-4 ${
            openSidebar ? "md:col-span-3" : "md:col-span-4"
          } `}
        >
          <Header />
          <BookingInfo />
          <MainContent cars={cars} setCars={setCars} />
        </div>
      </main>
    </>
  );
};

export default MainSection;
