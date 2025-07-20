import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Katlin Pala and is{" "}
          <a
            href="https://github.com/Katlin2000/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
