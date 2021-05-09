import { render } from "@testing-library/react";
import React from "react";
import "../card.css";
const WeatherForeCastTimeDetails = ({ date }) => {
  render(
    <div className="forecast-dest__grid">
      <div className="forecast-dest__grid-item">
        <p className="forecast-desc__hed-sub">Time</p>
        <ul>
          {date.time.map((time) => {
            return <li className="u-margin-b--sm">{time}</li>;
          })}
        </ul>
      </div>
      <div className="forecast-dest__grid-item">
        <p className="forecast-desc__hed-sub">Temperature</p>
        <ul>
          {date.temps.map((temp) => {
            return <li className="u-margin-b--sm">{temp}</li>;
          })}
        </ul>
      </div>
      <div className="forecast-dest__grid-item">
        <p className="forecast-desc__hed-sub">Description</p>
        <ul>
          {date.descHour.map((descHour) => {
            return <li className="u-margin-b--sm">{descHour}</li>;
          })}
        </ul>
      </div>
      <div className="forecast-dest__grid-item">
        <p className="forecast-desc__hed-sub">Humidity</p>
        <ul>
          {date.humidity.map((humi) => {
            return <li className="u-margin-b--sm">{humi}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WeatherForeCastTimeDetails;
