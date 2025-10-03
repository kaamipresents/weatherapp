import React, { createContext, useState } from 'react'

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {

  const [weatherData, setWeatherData] = useState(null);
  const tabs = [5, 14, 30];
  const { tabNorm, setTabNorm } = useState(5);
  const [dailyData, setDailyData] = useState([
    {
      day: 'Monday',
      date: 'June 10',
      condition: 'rain',
      description: 'Rain',
      low: 9,
      high: 16,
    }, {
      day: 'Tuesday',
      date: 'June 11',
      condition: 'cloudy',
      description: 'Partly Cloudy',
      low: 10,
      high: 17,
    },
    {
      day: 'Wednesday',
      date: 'June 12',
      condition: 'fog',
      description: 'Fog',
      low: 8,
      high: 15,
    },
    {
      day: 'Thursday',
      date: 'June 13',
      condition: 'heavy-rain',
      description: 'Heavy Rain',
      low: 7,
      high: 14,
    },
    {
      day: 'Friday',
      date: 'June 14',
      condition: 'rain',
      description: 'Rain',
      low: 9,
      high: 16,
    },
  ]);
  // const dailyData = [];
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

  // Function to generate dummy daily data for a given number of days
  const generateDailyData = (numDays) => {
    const conditions = [
      { condition: 'heavy-rain', description: 'Heavy Rain' },
      { condition: 'cloudy', description: 'Partly Cloudy' },
      { condition: 'fog', description: 'Fog' },
      { condition: 'rain', description: 'Rain' },
    ];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + i);
      const dayName = daysOfWeek[dateObj.getDay()];
      const month = dateObj.toLocaleString('en-US', { month: 'long' });
      const day = dateObj.getDate();
      const condition = conditions[i % conditions.length];
      setDailyData(prevData => [...prevData, {
        day: dayName,
        date: `${month} ${day}`,
        condition: condition.condition,
        description: condition.description,
        low: 9,
        high: 16,
      }]);
    }
    // return dailyData;
  };

  // Example: generate 5 days of data
  // const dailyData = generateDailyData(5);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, hourlyData, generateDailyData, tabs, dailyData, setDailyData }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider