import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const data = props.data;

  if (!data || !data.temperature || !data.condition?.icon) {
    return null;
  }

  function maxTemperature() {
    return `${Math.round(data.temperature.maximum)}°`;
  }

  function minTemperature() {
    return `${Math.round(data.temperature.minimum)}°`;
  }

  function day() {
    const date = new Date(data.time * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay text-center">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={data.condition.icon} size={36} />
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
