import React, { useState } from "react";
import "../SearchBar/SearchBar.css";
import { withRouter } from "react-router-dom";
import Header from "../WeatherComponent/Header";

const SearchBar = (props) => {
  const [searchCity, setSearchCity] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchCity);
    props.history.push("/forecast/" + searchCity);
  }
  return (
    <div>
      <Header />
      <div className="SearchBar">
        <form onSubmit={handleSubmit} className="u-inline-block">
          <input
            type="text"
            className="input"
            id="search_field"
            placeholder="Enter city"
            autoComplete="off"
            value={searchCity}
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
