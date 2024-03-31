import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'



const Weather = () => {



  let DAY_URL = "light.jpg"

  let NIGHT_URL = "night.jpg"

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
    timezone : "--" 
  
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


    <div className={`relative flex justify-center items-center gap-10 flex-col w-full h-full bg-no-repeat bg-cover ${isDay ? 'bg-[url("light.jpg")]' : 'bg-[url("night.jpg")] text-white'}`}>
  {isDay ? (
    <div className="absolute inset-0 bg-white bg-opacity-10"></div>
  ) : (
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  )}


      <h1 className='text-center m-5 text-3xl font-bold'>weather</h1>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>

  )
}

export default Weather

// weather  --> send the prop to the searchbox updatefunc that update the data and this data send to infobox to render
// /    \
// infobox   searchbox
