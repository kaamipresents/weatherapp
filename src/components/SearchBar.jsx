import { useContext, useState } from "react";
import "./SearchBar.css";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const {setWeatherData} = useContext(WeatherContext);

  const fetchLocation = async (e) => {
      e.preventDefault();
      if (query.trim() === "") {
        return; // Do not fetch if query is empty
      }
      try {
    //   const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    //   console.log(apiKey);
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=68493baf75e5465585c132951251709&q=${query}&aqi=no`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      console.log(data.current.temp_c);
      setQuery("");
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };


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
