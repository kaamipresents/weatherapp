import React, { useContext } from 'react';
import { Wind } from 'lucide-react';
import { WeatherContext } from './context/WeatherContext';

const CurrentWeather = () => {

  const {temperature, wind, condition} = useContext(WeatherContext);

  return (
    <>
      <div className="current-temp-section">
        <div className="current-temp">{`${temperature}°C`}</div>
        <div className="wind-info">
          <Wind size={18} />
          <span>{`Northeast ${wind} km/h`}</span>
        </div>
      </div>

      <div className="weather-condition">
        <h1 className="condition-title">{condition}</h1>
      </div>
    </>
  );
};

export default CurrentWeather;
