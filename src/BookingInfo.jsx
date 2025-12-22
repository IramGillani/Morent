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
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    dropoffDate: null,
    pickupTime: "",
    dropoffTime: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const swapFields = (fieldA, fieldB) => {
    setFormData((prev) => {
      const newForm = { ...prev };

      const temp = newForm[fieldA];
      newForm[fieldA] = newForm[fieldB];
      newForm[fieldB] = temp;

      return newForm;
    });
  };

  const swapPickupDropoff = () => {
    const pairs = [
      ["pickupLocation", "dropoffLocation"],
      ["pickupTime", "dropoffTime"],
      ["pickupDate", "dropoffDate"],
    ];

    pairs.forEach(([a, b]) => swapFields(a, b));
  };

  const SwapBtn = () => (
    <button
      className="bg-primary-blue uppercase py-3 px-4 text-white rounded-sm font-semibold cursor-pointer hover:bg-primary-text transition-colors duration-500 absolute top-1/2 -translate-y-5/6 -translate-x-1/2 left-1/2"
      onClick={swapPickupDropoff}
    >
      <IoSwapVertical />
    </button>
  );
  const BookingCard = ({ target }) => {
    const fieldName =
      target === "Pickup" ? "pickupLocation" : "dropoffLocation";
    const fieldValue = formData[fieldName];
    return (
      <>
        <div className="rounded-md w-full bg-white p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4 ">
            <span
              className={`w-4 h-4 rounded-full relative bg-tertiary-text after:content-[''] after:bg-primary-blue after:absolute after:w-2 after:h-2 after:rounded-full after:translate-1/2`}
            ></span>
            <h6 className="font-semibold">{target}</h6>
          </div>
          <div className="grid grid-cols-3 gap-6 w-full items-center">
            {/* Location */}
            <div className="flex flex-col gap-1 ">
              <h6>Location</h6>{" "}
              <label htmlFor="location">
                <select
                  name="location"
                  id="location"
                  className="text-sm "
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
                  <option value="" className={`text-tertiary-text `}>
                    Select city
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {/* Date */}
            <div className="flex flex-col ">
              <h6 className="px-3">Date</h6>
              <label htmlFor="date">
                <DatePicker
                  value={
                    target === "Pickup"
                      ? formData.pickupDate
                      : formData.dropoffDate
                  }
                  placeholder="Select your date"
                  change={(date) =>
                    handleChange(
                      target === "Pickup" ? "pickupDate" : "dropoffDate",
                      date
                    )
                  }
                />
              </label>
            </div>
            {/* Time */}
            <div className="flex flex-col ">
              <h6 className="px-3">Time</h6>
              <label htmlFor="time">
                {" "}
                <TimePicker
                  value={
                    target === "Pickup"
                      ? formData.pickupTime
                      : formData.dropoffTime
                  }
                  placeholder="Select your Time"
                  change={(time) =>
                    handleChange(
                      target === "Pickup" ? "pickupTime" : "dropoffTime",
                      time
                    )
                  }
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
      <section className="grid grid-cols-1 xl:grid-cols-2 mt-8 gap-6 relative">
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
