import { useContext, useState } from "react";
import "./SearchBar.css";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const {setWeatherData} = useContext(WeatherContext);

  const fetchLocation = async (e) => {
  e.preventDefault();
  if (query.trim() === "") return;

  try {
    const response = await fetch(`http://localhost:5000/weather?city=${query}`);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
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
