import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../Style/Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.lenght).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="weather-icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Feels like</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Wind</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {item.wind.speed} m/s
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Humidity</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Pressure</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Clouds</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {item.clouds.all}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-item-label">Sea level</label>
                  <label htmlFor="" className="daily-details-item-value">
                    {item.main.sea_level} m
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
