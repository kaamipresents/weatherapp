import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import CurrentWeather from '../../components/CurrentWeather';
import HourlyForecast from '../../components/HourlyForecast';
import ForecastTabs from '../../components/ForecastTabs';
import DailyForecast from '../../components/DailyForecast';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const WeatherApp = () => {
  // const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
               <SearchBar/>
              <Header />
              <CurrentWeather />
              <HourlyForecast hourlyData/>
            </div>
          </div>

          {/* Forecast Panel */}
          <div className="forecast-panel">
            <div className="glass-panel forecast-panel-content">
              <ForecastTabs />
              <DailyForecast/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
