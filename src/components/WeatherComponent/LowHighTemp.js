import React from "react";
import "../card.css";
import "../WeatherComponent/LowHighTemp.css";
const LowHighTemp = ({ high, low }) => {
  return (
    <div className="forecast-min-max-temp">
      <span>Low: {low}°F </span>
      <span>High: {high}°F</span>
    </div>
  );
};

export default LowHighTemp;
