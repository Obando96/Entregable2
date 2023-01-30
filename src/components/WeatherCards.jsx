import React from 'react'
import "./styles/WatherCards.css"

const WeatherCards = ({weather , temps, isCelsius, chnageUnitTemp}) => {
  return (
    <section className='weatherCard'>
        <h1 className='weatherCard__title'>Weather App</h1>
        <h2 className='weatherCard__place'>{weather?.name}, {weather?.sys.country}</h2>
        <div>
            <img className='weatherCard__img' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
        </div>
        <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + " °C" : temps?.farenheit + " °F"}</h3>
        <ul className='weatherCard__list'>
            <li>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
            <li><span>Wind Speed:</span>{weather?.wind.speed} m/sec</li>
            <li><span>Clouds: </span>{weather?.clouds.all} %</li>
            <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
        </ul>
        <button className='weatherCard__btn' onClick={chnageUnitTemp}>Change</button>
    </section>
  )
}

export default WeatherCards