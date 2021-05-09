import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Date from "./Date";
import "../card.css";
import LowHighTemp from "./LowHighTemp";
import WeatherForeCastDescription from "./WeatherForeCastDescription";
import WeatherSeeMore from "./WeatherSeeMore";

const WeatherForeCastDay = ({ day, city, index, handleSeeMoreAction }) => {
  const [isMoreClicked, setMoreClicked] = React.useState(false);
  function handleSeeMore(event) {
    handleSeeMoreAction(event.currentTarget.value);
  }
  return (
    <div>
      <div className="card-container">
        <WeatherIcon weatherIconURL={day.icon} />
        <Temperature forecastTemp={day.average} />
        <LowHighTemp high={day.max} low={day.min} />
        <Date forecastDate={day.day} />
        <WeatherSeeMore index={index} handleSeeMore={handleSeeMore} />
      </div>
      {isMoreClicked && <WeatherForeCastDescription />}
    </div>
  );
};

export default WeatherForeCastDay;
