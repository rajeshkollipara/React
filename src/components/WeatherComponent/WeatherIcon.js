import React, { useEffect } from "react";
import {
  WiDaySunny,
  WiDayCloudy,
  WiDayCloudyWindy,
  WiDayRainMix,
  WiDayRain,
  WiDayThunderstorm,
  WiNightSnowWind,
  WiWindy,
} from "weather-icons-react";

const WeatherIcon = ({ weatherIconURL }) => {
  function getWeatherIcon() {
    switch (weatherIconURL) {
      case "01d":
        return <WiDaySunny size={100} color="#ffffff" />;
      case "02d":
        return <WiDayCloudy size={100} color="#ffffff" />;
      case "03d":
        return <WiDayCloudy size={100} color="#ffffff" />;
      case "04d":
        return <WiDayCloudyWindy size={100} color="#ffffff" />;
      case "09d":
        return <WiDayRainMix size={100} color="#ffffff" />;
      case "10d":
        return <WiDayRain size={100} color="#ffffff" />;
      case "11d":
        return <WiDayThunderstorm size={100} color="#ffffff" />;
      case "13d":
        return <WiNightSnowWind size={100} color="#ffffff" />;
      case "50d":
        return <WiWindy size={100} color="#ffffff" />;
      default:
        return (
          <div>
            <img alt="" src={weatherIconURL} />
          </div>
        );
    }
  }
  return getWeatherIcon();
};

export default WeatherIcon;
