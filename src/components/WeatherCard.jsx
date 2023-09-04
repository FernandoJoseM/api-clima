import { useState } from "react"

const WeatherCard = ({weather,temp}) => {
  const [isCelcius, setIsCelcius] = useState(true)

  const handleChangeTemp=()=>{
    setIsCelcius(!isCelcius)
  }
  
  return (
    <article>
      <h1>Weather App</h1>
      <h2 className="country">
          {weather?.name} - {weather?.sys.country}
      </h2>
      <div className="seccion">
         <div>
            <img
             src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" 
          />
         </div>
        <section className="list">
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span>Wind Speed</span><span>{weather?.wind.speed} m/s</span></li>
            <li><span>Clouds</span><span>{weather?.clouds.all} %</span></li>
            <li><span>Pressure</span><span>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2 className="grados">{isCelcius?`${temp?.celcius} °C`:`${temp?.faren} °F`}</h2>
      <button onClick={handleChangeTemp}>{isCelcius?'Change to °F':'Change to °C'}</button>
    </article>
    
  )
}

export default WeatherCard