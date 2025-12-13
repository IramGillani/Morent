import BookingInfo from "./BookingInfo";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import MainSection from "./MainSection";

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
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
