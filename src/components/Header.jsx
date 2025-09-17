import React, { useContext } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { WeatherContext } from './context/WeatherContext';

const formatTime = (date) =>
  date.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });

const formatDate = (date) =>
  date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

const Header = ({ currentTime }) => {

  const {location} = useContext(WeatherContext);

  return (
    <div className="weather-header">
      <div className="date-time">
        <div className="date">{formatDate(currentTime)}</div>
        <div className="time">{formatTime(currentTime)}</div>
      </div>
      <div className="location-selector">
        <MapPin size={16} className="location-icon" />
        <span className="location-text">{location}</span>
        {/* <ChevronDown size={16} className="chevron-icon" /> */}
      </div>
    </div>
  );
};

export default Header;
