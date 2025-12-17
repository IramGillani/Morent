import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainSection from "./MainSection";
import { useState } from "react";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Navbar filter={setOpenSidebar} />
      <MainSection openSidebar={openSidebar} />
      <Footer />
    </>
  );
}

export default App;
