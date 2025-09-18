import React from 'react';
import { CloudRain, Cloud, Sun, CloudDrizzle, Cog as Fog } from 'lucide-react';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const getWeatherIcon = (condition, size = 24) => {
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

const DailyForecast = () => {

  const { dailyData, weatherData } = useContext(WeatherContext);
  return (
    <div className="daily-forecast">
      {dailyData.map((day, index) => (
        <div key={index} className="daily-item">
          <div className="daily-left">
            {getWeatherIcon(weatherData?day.condition:"rain", 30)}
            <div className="daily-info">
              <div className="daily-day">{weatherData?`${day.day}, ${day.date}`:"Location not selected"}</div>
              <div className="daily-description">{weatherData?day.description:"Select City"}</div>
            </div>
          </div>
          <div className="daily-temps">
            <div className="temp-low">{weatherData?`${day.low}°`:"°"}</div>
            <div className="temp-high">{weatherData?`${day.low}°`:"°"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
