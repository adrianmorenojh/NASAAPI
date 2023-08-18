import { useState } from "react";
import { Button } from "~/components/Button";
import { CameraSelect } from "../CameraSelect";
import { SunFilter } from "../SunFilter";
import { DateFilter } from "../DateFilter";
import { format } from "date-fns";
import "./styles.css";
const PHOTO_ROVERS = ["curiosity", "opportunity", "spirit"];

export const Filters = ({
  handleRoverSelect,
  selectedRover,
  camera,
  handleCameraSelect,
  setDateFilter,
  setSunFilter,
}) => {
  const [selectedDate, setSelectedDate] = useState("null");
  const [numberValue, setNumberValue] = useState("2890");
  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const handleSearchClick = () => {
    let date;
    if (selectedDate?.$d) date = format(selectedDate.$d, "yyyy-MM-dd");
    setDateFilter(date);
    setSunFilter(numberValue);
  };

  return (
    <section className="filters--container">
      <h1>Filters</h1>
      <div className="principal--filters">
        <div className="rovers-filters">
          {PHOTO_ROVERS.map((rover, index) => (
            <Button
              key={index}
              text={rover}
              onClick={() => handleRoverSelect(rover)}
              isActive={rover === selectedRover}
            />
          ))}
        </div>
        <CameraSelect camera={camera} handleCameraSelect={handleCameraSelect} />
      </div>
      <div className="secondary--filters">
        <SunFilter
          handleNumberChange={handleNumberChange}
          numberValue={numberValue}
        />
        <DateFilter
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
        <Button onClick={handleSearchClick} text={"search"} />
      </div>
    </section>
  );
};
