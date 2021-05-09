import React from "react";
import "../WeatherComponent/Temperature.css";

const Temperature = ({ forecastTemp }) => {
  return (
    <div className="temperature">
      <p>{forecastTemp}°F</p>
    </div>
  );
};

export default Temperature;
