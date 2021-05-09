import React from "react";
import WeatherIcon from "./WeatherIcon";
import "../card.css";

const WeatherForeCastImageDetails = ({ date }) => {
  return (
    <div className="forecast-desc__block">
      <WeatherIcon weatherIconURL={date.icon} />
      <div>
        <h2 className="forecast-desc__hed">Details</h2>
        <div className="details-keys">
          <div className="u-margin-b--sm">
            <span className="u-weight--bold">Average</span>: {date.average}
          </div>
          <div className="u-margin-b--sm">
            <span className="u-weight--bold">High</span>: {date.max}
          </div>
          <div className="u-margin-b--sm">
            <span className="u-weight--bold"> Low</span>: {date.min}
          </div>
          <div className="u-margin-b--sm">
            <span className="u-weight--bold">Description</span>: {date.descMain}
          </div>
          <div className="u-margin-b--sm">
            <span className="u-weight--bold">Date</span>: {date.day}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForeCastImageDetails;
