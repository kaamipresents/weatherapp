import React, { createContext, useState } from 'react'

export const WeatherContext = createContext();

const WeatherProvider = ({children}) => {

    const [location, setLocation] = useState("Faisalabad");
    const [temperature, setTemperature] = useState("0");
    const [wind, setWind] = useState("0");
    const [condition, setCondition] = useState("Nothing");

  return (
    <WeatherContext.Provider value={{location, setLocation, temperature, setTemperature, setWind, wind, condition, setCondition}}>
        {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider