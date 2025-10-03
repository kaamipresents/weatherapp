import React from 'react';
import { CloudRain, Cloud, Sun, CloudDrizzle, Cog as Fog } from 'lucide-react';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const getWeatherIcon = (condition, size = 20) => {
  const iconProps = { size, className: 'weather-icon' };
  switch (condition) {
    case 'rain':
    case 'heavy-rain': return <CloudRain {...iconProps} />;
    case 'cloudy': return <Cloud {...iconProps} />;
    case 'sunny': return <Sun {...iconProps} />;
    case 'fog': return <Fog {...iconProps} />;
    default: return <CloudDrizzle {...iconProps} />;
  }
};

const HourlyForecast = () => {
  const { hourlyData } = useContext(WeatherContext);
  return (
    <div className="hourly-forecast">
      {hourlyData.map((hour, index) => (
        <div key={index} className="hourly-item">
          <div className="hourly-time">{hour.time}</div>
          <div className="hourly-icon">{getWeatherIcon(hour.condition)}</div>
          <div className="hourly-temp">{hour.temperature}°C</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
