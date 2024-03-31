import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SearchBox = ({ updateInfo , setLoading }) => {

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"


    let API_KEY = "829cded8e056708a8780ed6e767ad222";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await res.json();
            console.log(data);

            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
                sunRise: data.sys.sunrise,
                sunSet: data.sys.sunset,
                timezone: data.timezone
            };

            console.log(result);
            return result;
        } catch (error) {
            setError(true);
        }


    }



    let handleChange = (event) => {
        setCity(event.target.value);
        console.log(city);
    }


    let submitHandler = async (event) => {
        event.preventDefault();
        console.log(city);


       setLoading(true);
        
        let newinfo = await getWeatherInfo();
        if (newinfo) {

            updateInfo(newinfo);
            setError(false);

        }
        else{
            setError(true);
        }

        setLoading(false);
       


    }
    return (
        <div className='text-center'>
            <form action="" onSubmit={submitHandler} className='flex  max-sm:flex-col justify-center items-center gap-2 max-sm:gap-0'>

                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} className='text-white bg-slate-400 rounded-md ' />
                <br />
                <br />


                <Button variant="contained" type='submit' className=''>
                    Search
                </Button>


            </form>
            {
                

                    error && <p className=' text-red-600'>No such place exists</p> 
            }
        </div>

    )
}

export default SearchBox