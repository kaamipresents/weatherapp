import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import CurrentWeather from '../CurrentWeather';
import HourlyForecast from '../HourlyForecast';
import ForecastTabs from '../ForecastTabs';
import DailyForecast from '../DailyForecast';
import Header from '../Header';
import SearchBar from '../SearchBar';

const WeatherApp = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('5 days');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Hourly data
  const hourlyData = [
    { time: '09:00', temperature: 9, condition: 'rain' },
    { time: '10:00', temperature: 10, condition: 'rain' },
    { time: '11:00', temperature: 10, condition: 'rain' },
    { time: '12:00', temperature: 11, condition: 'rain' },
    { time: '13:00', temperature: 12, condition: 'rain' },
    { time: '14:00', temperature: 14, condition: 'rain' },
    { time: '15:00', temperature: 14, condition: 'cloudy' },
    { time: '16:00', temperature: 16, condition: 'cloudy' },
    { time: '17:00', temperature: 16, condition: 'cloudy' },
    { time: '18:00', temperature: 15, condition: 'cloudy' },
  ];

  // Daily data
  const dailyData = [
    { day: 'Friday', date: 'April 21', condition: 'heavy-rain', description: 'Heavy Rain', low: 9, high: 16 },
    { day: 'Saturday', date: 'April 22', condition: 'cloudy', description: 'Partly Cloudy', low: 9, high: 16 },
    { day: 'Sunday', date: 'April 23', condition: 'fog', description: 'Fog', low: 9, high: 16 },
    { day: 'Monday', date: 'April 24', condition: 'cloudy', description: 'Partly Cloudy', low: 9, high: 16 },
    { day: 'Tuesday', date: 'April 25', condition: 'rain', description: 'Rain', low: 9, high: 16 },
  ];

  const [city, setCity] = useState("Karachi"); // default city

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    console.log("Searching weather for:", searchCity);
    // Later pass city to your weather fetch logic
  };

  return (
    <div className="weather-app">
      {/* Animated Rain Background */}
      <div className="rain-background">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              height: `${10 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="weather-container">
        <div className="weather-grid">

          {/* Main Weather Card */}
          <div className="main-weather-card">
            <div className="glass-panel main-panel">
               <SearchBar onSearch={handleSearch} />
              <Header currentTime={currentTime} />
              <CurrentWeather />
              <HourlyForecast hourlyData={hourlyData} />
            </div>
          </div>

          {/* Forecast Panel */}
          <div className="forecast-panel">
            <div className="glass-panel forecast-panel-content">
              <ForecastTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <DailyForecast dailyData={dailyData} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
