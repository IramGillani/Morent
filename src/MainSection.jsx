import Header from "./Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const MainSection = () => {
  return (
    <>
      {" "}
      <main className="grid grid-cols-4 w-full bg-lightBg ">
        <Sidebar />
        <div className="py-2 px-4 sm:py-4 sm:px-6 w-full col-span-4 md:col-span-3">
          <Header />
          {/* <BookingInfo /> */}
          <MainContent />
        </div>
      </main>
    </>
  );
};

export default MainSection;
