import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/Weather/weatherSlice";

const Weather = () => {
    const { metadata, temperature, city, state } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather({ city, state}))
    }, [dispatch, city, state])

    return (
        <div className="weather">
            <p className="location">{city}</p>
            <img
                src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
                alt=""
            />
            <p className="temperature">{Math.round(temperature)} °C</p>
            <p className="description">{metadata.description}</p>
        </div>
    )
}

export default Weather;