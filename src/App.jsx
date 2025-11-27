import BookingInfo from "./BookingInfo";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./Header";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-calendars/styles/material.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex w-full bg-tertiary-text ">
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
