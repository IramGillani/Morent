import BookingInfo from "./BookingInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainSection from "./MainSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex w-full bg-tertiary-text">
        <Sidebar />
        <div className="py-2 px-4 sm:py-4 sm:px-6 flex-1">
          <Header />
          <BookingInfo />
          {/* <MainSection /> */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
