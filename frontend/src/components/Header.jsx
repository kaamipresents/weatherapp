import React, { useContext } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { WeatherContext } from '../context/WeatherContext';

const formatTime = (date) => {
  const formattedTime =  new Date(date).toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });
  return formattedTime;
}

const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  return formattedDate;
}

const Header = ({ currentTime }) => {

  const {weatherData} = useContext(WeatherContext);

  return (
    <div className="weather-header">
      <div className="date-time">
        <div className="date">{weatherData?formatDate(weatherData.location.localtime):"Location not selected"}</div>
        {/* <div className="date">TIm</div> */}
        <span className="time">{weatherData?formatTime(weatherData.location.localtime):"Location not selected"}</span>
      </div>
      <div className="location-selector">
        <MapPin size={16} className="location-icon" />
        <span className="location-text">{(weatherData?`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`:"Location not selected")}</span>
        {/* <ChevronDown size={16} className="chevron-icon" /> */}
      </div>
    </div>
  );
};

export default Header;
