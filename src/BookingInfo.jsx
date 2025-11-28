import { IoSwapVertical } from "react-icons/io5";
import { DatePicker } from "./components/DatePicker";
import TimePicker from "./components/TimePicker";

import { cities } from "./data";
import { useState } from "react";
const BookingInfo = () => {
  // const [pickupLocation, setPickupLocation] = useState("Mul");
  // const [dropoffLocation, setDropoffLocation] = useState("");
  // const [pickupdate, setPickupDate] = useState("");
  // const [dropoffDate, setDropoffDate] = useState("");
  // const [pickupTime, setPickupTime] = useState("");
  // const [dropoffTime, setDropoffTime] = useState("");
  const [formData, setFormData] = useState({
    pickupLocation: "Mul",
    dropoffLocation: "Lhr",
    pickupDate: null,
    dropoffDate: null,
    pickupTime: "",
    dropoffTime: "",
  });

  const handleChange = (name, value) => {
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const handleChange = (name, value) => {
  //   console.log(name, value);
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  const swapLocations = () => {
    setFormData((prev) => {
      const { pickupLocation, dropoffLocation } = prev;
      return {
        ...prev,
        pickupLocation: dropoffLocation,
        dropoffLocation: pickupLocation,
      };
    });
  };
  const SwapBtn = () => (
    <button
      className="bg-primary-blue uppercase py-3 px-4 text-white rounded-sm font-semibold cursor-pointer hover:bg-primary-text transition-colors duration-500 absolute top-1/2 -translate-y-5/6 -translate-x-1/2 left-1/2"
      onClick={swapLocations}
    >
      <IoSwapVertical />
    </button>
  );
  const BookingCard = ({ target }) => {
    return (
      <>
        <div className="rounded-md w-full bg-white p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span
              className={`w-4 h-4 rounded-full relative bg-tertiary-text after:content-[''] after:bg-primary-blue after:absolute after:w-2 after:h-2 after:rounded-full after:translate-1/2`}
            ></span>
            <h6 className="font-semibold">{target}</h6>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <h6>Location</h6>{" "}
              <label htmlFor="location">
                <select
                  name="location"
                  id="location"
                  className="outline-none"
                  onChange={(e) =>
                    handleChange(
                      target === "Pickup"
                        ? "pickupLocation"
                        : "dropoffLocation",
                      e.target.value
                    )
                  }
                  value={
                    target === "Pickup"
                      ? formData.pickupLocation
                      : formData.dropoffLocation
                  }
                >
                  <option value="" className="text-tertiary-text">
                    Select your city
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.n}>
                      {/* {console.log(pickupLocation)} */}
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <h6>Date</h6>{" "}
              <label htmlFor="date">
                {" "}
                <DatePicker
                  value={formData.pickupDate}
                  placeholder="Select a date"
                  change={() => handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <h6>Time</h6>
              <label htmlFor="time">
                {" "}
                <TimePicker
                  value={formData.pickupTime}
                  placeholder="Select Time"
                  change={() => handleChange}
                />
              </label>{" "}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 relative">
        {" "}
        {["Pickup", "Dropoff"].map((t) => (
          <BookingCard key={t} target={t} />
        ))}
        <div>
          {" "}
          <SwapBtn />
        </div>
      </section>
    </>
  );
};

export default BookingInfo;
