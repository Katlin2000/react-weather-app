import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const apiKey = "e5bt54135b02f36048218oa4bf5cb2d1";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    setLoaded(false);

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.city]);

  if (!loaded || !forecast) {
    return null;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map((day, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={day} />
          </div>
        ))}
      </div>
    </div>
  );
}
