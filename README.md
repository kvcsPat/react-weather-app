# REACT WEATHER APP

## Introduction

In this app the user can search locations by city name and observe the current weather with a 7 days forecast.
The app is developed using ReactJS and utilizes the [OpenWeather API](https://openweathermap.org/api) for the weather
and the [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities) for the autocomplete feature.

## Used libraries

- react-js
- react-accessible-accordion
- react-select
- react-select-async-paginate
- react-loader-spinner

## Live Demo

This project is deployed on GitHub Pages. You can check it here:
[https://kvcspat.github.io/react-weather-app/](https://kvcspat.github.io/react-weather-app/)

## Setup

You need an API key from [OpenWeather API](https://openweathermap.org/api) and [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities).
Create a `.env` file in the `src` directory and assign your API keys to `REACT_APP_WEATHER_API_KEY` and `REACT_APP_GEO_API_KEY`.

To run this project, install it locally using npm:

```
$ cd weather-app
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots

![weather-app-home](https://github.com/kvcsPat/react-weather-app/assets/102482465/aef63826-2c34-4f69-aaba-2679061b5f76)

![weather-app-weather](https://github.com/kvcsPat/react-weather-app/assets/102482465/a61122d2-8302-4b9d-a600-96816d6816a3)

![weather-app-forecast](https://github.com/kvcsPat/react-weather-app/assets/102482465/f63a5707-b205-4200-b873-3f9cacfd396b)
