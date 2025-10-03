import React from 'react';
import WeatherApp from './pages/home/WeatherApp';
import WeatherProvider from './context/WeatherContext';

function App() {
  return <>
  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>
  </>
}

export default App;