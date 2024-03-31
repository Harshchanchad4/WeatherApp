import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import Spinner from './Spinner'


const Weather = () => {



  let DAY_URL = "light.jpg"

  let NIGHT_URL = "night.jpg"
  const [loading, setLoading] = useState(false);

  const [weatherInfo, setWeatherInfo] = useState({
    city: "--",
    temp: "--",
    tempMin: "--",
    tempMax: "--",
    humidity: "--",
    feelsLike: "--",
    weather: "--",
    sunRise: "--",
    sunSet: "--",
    timezone: "--"

  })


  let updateInfo = ((newinfo) => {
    setWeatherInfo(newinfo);

  })


  // Function to check if it's daytime
  function isDaytime(currentTime, sunriseTime, sunsetTime) {
    return currentTime >= sunriseTime && currentTime <= sunsetTime;
  }

  // Get current time in Unix timestamp (seconds)
  const currentTime = Math.floor(Date.now() / 1000);


  // Check if it's currently daytime
  const isDay = isDaytime(currentTime, weatherInfo.sunRise, weatherInfo.sunSet);

  // Output the result
  console.log("Is it daytime?", isDay);

  return (
    <div className={`relative flex justify-center items-center gap-10 flex-col w-full h-full bg-no-repeat bg-cover ${isDay ? 'bg-[url(day.jpg)]' : 'bg-[url("night2.jpg")] text-white'}`}>
     

      <h1 className='text-center m-5 text-3xl font-bold'>Weather</h1>

      <SearchBox updateInfo={updateInfo} setLoading={setLoading} />
      {
        // console.log(loading);
        loading ? <Spinner /> : <InfoBox info={weatherInfo} />
      }
    </div>

  )
}

export default Weather

// weather  --> send the prop to the searchbox updatefunc that update the data and this data send to infobox to render
// /    \
// infobox   searchbox
