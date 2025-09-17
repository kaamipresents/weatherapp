import React from 'react';
import WeatherApp from './components/Weather/WeatherApp';
import WeatherProvider from './components/context/WeatherContext';

function App() {
  return <>
  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>
  </>
}

export default App;