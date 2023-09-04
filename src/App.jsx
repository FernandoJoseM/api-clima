import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'


function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  useEffect(() => {
    const success=(position)=>{
      
      const obj={
        lat:position.coords.latitude,
        lon:position.coords.longitude
      }
      setCoords(obj)
      
    }

    const error=(err)=>{
      console.log(err);
    }
    const options={
      enableHighAccuracy:true,
      timeout:5000,
      maximunAge:0
    }
    navigator.geolocation.getCurrentPosition(success,error,options)
  
    
  }, [])

  useEffect(() => {
    if(coords){
      const apiKey='85a0ddac442aedc68d5a1bbd564e1f53'
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      
      axios.get(url)
      .then(res=>{
        setWeather(res.data)
        const obj={
          celcius:(res.data.main.temp-273.15).toFixed(1),
          faren:((res.data.main.temp-273.15)*9/5+32).toFixed(1)
        }
        setTemp(obj)
      })
      .catch(err=>console.log(err))
    }
  }, [coords])
  console.log(weather);
  

  return (
    <>
      <WeatherCard
        weather={weather}
        temp={temp}
      />
    </>
  )
}

export default App
