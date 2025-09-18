import React, { createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (weatherData) {
      generateDailyData(tabs[activeTab===5?0:activeTab===14?1:2]); // or any default number of days you want
    }
  }, [weatherData]);

  const tabs = [5, 14, 30];
  // const { tabNorm, setTabNorm } = useState(tabs[0]);
  const [activeTab, setActiveTab] = useState(5);
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
  // Generate fixed random hourly data once per weatherData change
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const generateHourlyData = () => {
      const times = [
        '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00', '18:00'
      ];
      const conditions = ['rain', 'cloudy', 'fog', 'heavy-rain'];
      let baseTemp = 12;
      if (weatherData && weatherData.current && typeof weatherData.current.temp_c === 'number') {
        baseTemp = weatherData.current.temp_c;
      }
      return Array.from({ length: 10 }, (_, i) => {
        // Use a seeded random value for each hour to keep it fixed for this weatherData
        const rand = Math.abs(
          (baseTemp * 1000 + i * 17 + (weatherData?.location?.name?.length || 0) * 13)
        );
        const tempVariation = (rand % 5) - 2; // -2 to +2
        const temperature = baseTemp + tempVariation;
        const condition = conditions[rand % conditions.length];
        return {
          time: times[i],
          temperature,
          condition,
        };
      });
    };

    setHourlyData(generateHourlyData());
  }, [weatherData]);

  // Function to generate dummy daily data for a given number of days
  // Deterministic daily data generation based on weatherData and numDays
  const generateDailyData = (numDays) => {
    const conditions = [
      { condition: 'heavy-rain', description: 'Heavy Rain' },
      { condition: 'cloudy', description: 'Partly Cloudy' },
      { condition: 'fog', description: 'Fog' },
      { condition: 'rain', description: 'Rain' },
    ];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const newData = [];

    // Use a deterministic seed based on weatherData and numDays
    let baseSeed = 12345;
    if (weatherData && weatherData.location && weatherData.location.name) {
      baseSeed +=
        weatherData.location.name
          .split('')
          .reduce((acc, c) => acc + c.charCodeAt(0), 0) * 13;
    }
    if (weatherData && weatherData.current && typeof weatherData.current.temp_c === 'number') {
      baseSeed += Math.floor(weatherData.current.temp_c * 100);
    }
    baseSeed += numDays * 17;

    // Simple seeded random generator
    function seededRandom(seed) {
      let x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }

    for (let i = 0; i < numDays; i++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + i);
      const dayName = daysOfWeek[dateObj.getDay()];
      const month = dateObj.toLocaleString('en-US', { month: 'long' });
      const day = dateObj.getDate();

      // Deterministic random for this day
      const daySeed = baseSeed + i * 31;

      // Pick a deterministic condition
      const condIdx = Math.floor(seededRandom(daySeed) * conditions.length);
      const condition = conditions[condIdx];

      // Generate deterministic temperatures
      let baseTemp = 12;
      if (weatherData && weatherData.current && typeof weatherData.current.temp_c === 'number') {
        baseTemp = weatherData.current.temp_c;
      }
      const variation = Math.floor(seededRandom(daySeed + 1) * 4) - 2 + i;
      const low = Math.max(0, Math.floor(baseTemp - 3 + variation));
      const high = low + Math.floor(seededRandom(daySeed + 2) * 6) + 2;

      newData.push({
        day: dayName,
        date: `${month} ${day}`,
        condition: condition.condition,
        description: condition.description,
        low,
        high,
      });
    }

    setDailyData(newData);
  };

  // Example: generate 5 days of data
  // const dailyData = generateDailyData(5);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, hourlyData, generateDailyData, tabs, dailyData, setDailyData, activeTab, setActiveTab }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider