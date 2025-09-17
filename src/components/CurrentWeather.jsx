import React, { useContext } from 'react';
import { Wind } from 'lucide-react';
import { WeatherContext } from './context/WeatherContext';

const CurrentWeather = () => {

  const {weatherData} = useContext(WeatherContext);

  return (
    <>
      <div className="current-temp-section">
        <div className="current-temp">{weatherData?`${weatherData.current.temp_c}°C`:"°C"}</div>
        <div className="wind-info">
          <Wind size={18} />
          <span>{weatherData?`${weatherData.current.wind_dir} ${weatherData.current.wind_kph} km/h`:"Location Not Selected"}</span>
        </div>
      </div>

      <div className="weather-condition">
        <h1 className="condition-title">{weatherData?weatherData.current.condition.text:"Location not selected"}</h1>
      </div>
    </>
  );
};

export default CurrentWeather;
