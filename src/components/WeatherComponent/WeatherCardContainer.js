import React, { useEffect, useState } from "react";
import "../card.css";
import "../WeatherComponent/WeatherForeCastDay.css";
import WeatherForeCastDay from "./WeatherForeCastDay";
import WeatherForeCastDescription from "./WeatherForeCastDescription";
import Loader from "react-loader-spinner";

const WeatherCardContainer = (props) => {
  const [mount, setMount] = useState(false);
  const [currentSelection, setCurrentSelection] = React.useState(null);
  const searchCity = props.match.params.city;
  useEffect(() => {
    if (!mount) {
      setMount(true);
      props.updateForecast(searchCity);
    } else {
      return;
    }
  }, []);

  function renderDay() {
    if (!props.forecast.length) {
      return (
        <Loader
          type="Puff"
          color="#363346"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }

    return props.forecast.map((day, index) => {
      return (
        <WeatherForeCastDay
          key={index}
          day={day}
          city={props.match.params.city}
          index={index}
          handleSeeMoreAction={handleSeeMoreAction}
        />
      );
    });
    function handleSeeMoreAction(value) {
      const valueSelected = currentSelection == value ? null : value;
      setCurrentSelection(valueSelected);
    }
  }
  return (
    <div className="container">
      <div className="forecast__grid">{renderDay()}</div>
      {currentSelection && (
        <WeatherForeCastDescription
          model={props.forecast[currentSelection]}
          searchCity={searchCity}
        />
      )}
    </div>
  );
};

export default WeatherCardContainer;
