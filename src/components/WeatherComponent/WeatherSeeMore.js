import React from "react";
import "../WeatherComponent/WeatherSeeMore.css";

const WeatherSeeMore = ({ index, handleSeeMore }) => {
  return (
    <button
      className="see-more"
      type="submit"
      key={index}
      value={index}
      onClick={handleSeeMore}
    >
      More Info
    </button>
  );
};

export default WeatherSeeMore;
