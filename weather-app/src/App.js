import React, { useState } from "react";
import Home from "./Components/Home";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";
import Loading from "./Components/Loading";
import { WEATHER_API_URL } from "./api";
import "./Style/reset.css";
import "./Style/global.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    let loading;

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setIsLoading(true);

        loading = setTimeout(() => {
          setIsLoading(false);
          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forecastResponse });
        }, 1000);
      })
      .then(clearTimeout(loading))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {currentWeather ? <CurrentWeather data={currentWeather} /> : <Home />}
          {forecast && <Forecast data={forecast} />}
        </>
      )}
    </div>
  );
}

export default App;
