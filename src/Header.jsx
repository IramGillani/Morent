import Button from "./components/Button";

const Header = () => {
  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 gap-8 space-x-2 space-y-1">
      <div className="circular-pattern w-full p-4 text-white rounded-lg relative h-80">
        <div className="max-w-sm">
          <h1 className="mb-2 text-white">The Best Platform for Car Rental</h1>
          <p className="mb-2">
            Ease of doing a car rental safely and reliably. Of course at a low
            price
          </p>
          <Button title="rental car" />
        </div>

        <img
          src="./car1.png"
          alt="Nissan"
          className="absolute bottom-0.5 right-1/8 w-50 h-40"
        />
      </div>
      <div className="circular-pattern w-full p-4 text-white rounded-lg relative h-80">
        <div className="max-w-sm">
          <h1 className="mb-2 text-white">
            Easy way to rent a car at a low price
          </h1>
          <p className="mb-2">
            Providing cheap car rental servicqes and safe and comfortable
            facilities.e
          </p>
          <Button title="rental car" />
        </div>

        <img
          src="./car1.png"
          alt="Nissan"
          className="absolute bottom-0.5 right-1/8 w-50 h-40"
        />
      </div>
    </header>
  );
};

export default Header;
