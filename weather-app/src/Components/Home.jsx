import React from "react";
import "../Style/Home.css";

export default function Main() {
  return (
    <div className="weather">
      <div className="text">
        <div className="title-container">
          <h1 className="title-h1">Weather App</h1>
          <p className="text-p1">by Patrik Kovács</p>
        </div>
        <div className="features-container">
          <h2 className="title-h2">Features:</h2>
          <ul className="feature-list">
            <li className="feature-list-item">combo box search bar</li>
            <li className="feature-list-item">current weather</li>
            <li className="feature-list-item">7 days forecast</li>
          </ul>
        </div>
        <div className="used-api-container">
          <div className="used-apis">
            <div className="used-api">
              <a
                className="btn-api"
                href="https://rapidapi.com/wirefreethought/api/geodb-cities"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="api-icon"
                  src="/icons/geodb-cities-icon.png"
                  alt="geoDB Cities"
                />
                <label className="api-label">GeoDB Cities</label>
              </a>
            </div>
            <div className="used-api">
              <a
                className="btn-api"
                href="https://openweathermap.org/apis"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="api-icon"
                  src="/icons/open-weather-icon.png"
                  alt="Open Weather"
                />
                <label className="api-label">OpenWeather</label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
