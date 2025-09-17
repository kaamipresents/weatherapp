import React from 'react';

const ForecastTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['5 days', '14 days', '30 days'];
  return (
    <div className="forecast-header">
      <h2 className="forecast-title">The Next Days Forecast</h2>
      <div className="forecast-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ForecastTabs;
