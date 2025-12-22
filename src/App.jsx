import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainSection from "./MainSection";
import { useState } from "react";
import { useDebounce } from "react-use";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");
  const [noResult, setNoResult] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(
    () => {
      setDebounceSearchTerm(query);
    },
    500,
    [query]
  );

  return (
    <>
      <main className="w-full mx-auto max-w-full ">
        {" "}
        <Navbar
          filter={setOpenSidebar}
          query={debounceSearchTerm}
          setQuery={setDebounceSearchTerm}
          setCars={setCars}
          setNoResult={setNoResult}
        />
        <MainSection
          openSidebar={openSidebar}
          setQuery={setQuery}
          cars={cars}
          setCars={setCars}
          noResult={noResult}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;
