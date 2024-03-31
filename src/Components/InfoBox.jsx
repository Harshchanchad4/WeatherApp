import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import winter from '.../public/winter'

import { MdOutlineSevereCold } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { IoThunderstormSharp } from "react-icons/io5";



import { useState } from 'react';

const InfoBox = ({ info }) => {


    // const Intial_image = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    let COLD_URL = "winter.jpg"

    let HOT_URL = "summer.jpg";

    let RAIN_URL = "monsoon.jpg";


   




    return (


        <div className='text-center flex justify-center items-center gap-2 flex-col text-2xl font-bold'>


            <h1> WeatherInfo - {info.weather} </h1>

            <div className=' text-center  flex justify-center items-center gap-2 flex-col'>


                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp > 24 ? HOT_URL : COLD_URL)}

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="span">
                            <div>

                                {info.city}{info.humidity > 80 ? <IoThunderstormSharp className="ml-4  inline" /> : (info.temp > 24 ? <FaSun className="ml-4  inline" /> : <MdOutlineSevereCold className="ml-4  inline" />)}

                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Min temperature : {info.tempMin}&deg;C</p>
                            <p>Max temperature : {info.tempMax}&deg;C</p>
                            <p>Feels Like : {info.feelsLike}&deg;C</p>
                            <p>The Weather can be describe as  <i>{info.weather}</i> and feels like {info.feelsLike}</p>

                        </Typography>
                    </CardContent>

                    {/* <div>{sunsetTime}</div> */}
                </Card>

            </div>
        </div>


    )
}

export default InfoBox