import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import WeatherIcon from "./WeatherIcon";
import WeatherForeCastImageDetails from "./WeatherForeCastImageDetails";
import WeatherForeCastTimeDetails from "./WeatherForeCastTimeDetails";
const WeatherForeCastDescription = (props) => {
  const date = props.model;
  const searchCity = props.searchCity.toUpperCase();
  useEffect(() => {});
  return (
    <div className="description-container">
      <div className="content__hed-block">
        <h1>{searchCity}</h1>
        <hr />
        <br />
        <h3>Forecast Info</h3>
      </div>
      <div>
        <WeatherForeCastImageDetails date={date} />
        <div>
          <h2 className="forecast-desc__hed">Details By Time</h2>

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
        </div>
      </div>
    </div>
  );
};

export default withRouter(WeatherForeCastDescription);
