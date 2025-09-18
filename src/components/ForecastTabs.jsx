import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ForecastTabs = () => {

  const {generateDailyData, tabs, setDailyData, activeTab, setActiveTab} = useContext(WeatherContext); // Future: Use context if needed

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setDailyData([]); // Clear previous data
    console.log(`Switched to ${tab} forecast`);
    generateDailyData(tab);
    // Future: Fetch and display data for the selected tab
  };


  return (
    <div className="forecast-header">
      <h2 className="forecast-title">The Next Days Forecast</h2>
      <div className="forecast-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {`${tab} days`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ForecastTabs;
