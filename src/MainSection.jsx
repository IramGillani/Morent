import Header from "./Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const MainSection = () => {
  return (
    <>
      {" "}
      <main className="flex w-full bg-lightBg ">
        <Sidebar />
        <div className="py-2 px-4 sm:py-4 sm:px-6 w-full">
          <Header />
          {/* <BookingInfo /> */}
          <MainContent />
        </div>
      </main>
    </>
  );
};

export default MainSection;
