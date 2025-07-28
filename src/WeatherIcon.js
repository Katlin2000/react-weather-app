import React from "react";

export default function WeatherIcon(props) {
  const iconUrl = `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`;

  return <img src={iconUrl} alt="Weather icon" width={64} height={64} />;
}
