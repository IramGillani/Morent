import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex items-center w-full bg-tertiary-text">
        <Sidebar />
        <div></div>
      </main>

      <Footer />
    </>
  );
}

export default App;
