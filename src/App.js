import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WeatherCardContainer from "./components/WeatherComponent/WeatherCardContainer";
import React from "react";
import getData from "./components/WeatherComponent/apiForecast";

function App() {
  const [searchCity, setSearchCity] = React.useState("");
  const [forecast, setForecast] = React.useState([]);
  function updateForecast(city) {
    if (!city) {
      return;
    }
    const forecast = getData(city);
    forecast.then((result) => {
      console.log(city);
      console.log(result);
      setSearchCity(city);
      setForecast(result);
    });
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route
          path="/forecast/:city"
          render={(props) => (
            <WeatherCardContainer
              {...props}
              updateForecast={updateForecast}
              forecast={forecast}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
