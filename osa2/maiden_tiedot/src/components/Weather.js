import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ShowWeather = ({ weather }) => {

  return (
    <div>
      <h2> Weather </h2>
      temperature: {weather.temperature} Celsius
      <p></p>
      <img src={weather.weather_icons} alt='icon'></img>
      <p></p>
      wind: {weather.wind_speed}  km/h direction {weather.wind_dir}
    </div>
  )
}


const Weather = ({ country }) => {

  const [weather, setWeather] = useState([])

  const [api_key]  = useState(process.env.REACT_APP_API_KEY)

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current`, {params: {access_key: api_key, query: country.capital, units: 'm'}} ).then(response => {
      console.log('promise fulfilled')
      console.log(response.data.current)
      setWeather(response.data.current)
    })
  },
    [country.capital, api_key]
  )


  return (
    <div>
      <ShowWeather weather={weather} />
    </div>
  )

}

export default Weather
