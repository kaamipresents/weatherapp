import React from 'react';
import { CloudRain, Cloud, Sun, CloudDrizzle, Cog as Fog } from 'lucide-react';

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

const DailyForecast = ({ dailyData }) => {
  return (
    <div className="daily-forecast">
      {dailyData.map((day, index) => (
        <div key={index} className="daily-item">
          <div className="daily-left">
            {getWeatherIcon(day.condition)}
            <div className="daily-info">
              <div className="daily-day">{day.day}, {day.date}</div>
              <div className="daily-description">{day.description}</div>
            </div>
          </div>
          <div className="daily-temps">
            <div className="temp-low">{day.low}°</div>
            <div className="temp-high">{day.high}°</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
