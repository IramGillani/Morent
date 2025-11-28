import BookingInfo from "./BookingInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex items-center w-full bg-tertiary-text">
        <Sidebar />
        <div className="py-2 px-4 sm:py-4 sm:px-6">
          <Header />
          <BookingInfo />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
