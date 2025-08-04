import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const data = props.data;

  if (!data || !data.temp || !data.weather || !data.weather[0]) {
    return null;
  }

  function maxTemperature() {
    return `${Math.round(data.temp.max)}°`;
  }

  function minTemperature() {
    return `${Math.round(data.temp.min)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay text-center">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather?.[0]?.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>{" "}
        <span className="WeatherForecast-temperature-min text-muted">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
