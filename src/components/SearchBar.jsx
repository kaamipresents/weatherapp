import { useContext, useState } from "react";
import "./SearchBar.css";
import { WeatherContext } from "./context/WeatherContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const {setLocation, setTemperature, setWind, setCondition} = useContext(WeatherContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!query) return;
//     onSearch(query);
//     setQuery("");
//   };

  const fetchLocation = async (e) => {
      e.preventDefault();
      try {
    //   const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    //   console.log(apiKey);
      const response = await fetch(
        // `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
        `https://api.weatherapi.com/v1/current.json?key=68493baf75e5465585c132951251709&q=${query}&aqi=no`
      );
      const data = await response.json();
      console.log(data);
      setLocation(`${data.location.name}, ${data.location.region}, ${data.location.country}`);
      console.log(data.current.temp_c);
      setTemperature(data.current.temp_c);
      setWind(data.current.wind_kph);
      setCondition(data.current.condition.text);
      setQuery("");
    //   fetchWeather(data.location.lat,data.location.lon,apiKey);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

//   const fetchWeather = async (latitude, longitude, apiKey) => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
//       );
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching weather:", error);
//     }
//   }

  return (
    <form onSubmit={fetchLocation} className="search-bar">
      <input
      required
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
