import React from "react";
import classes from "../../components/styleContainer/weather/weather.module.css";
import equator from "../../assets/equator.png";
const WeatherData = ({ city, search }) => {
  return (
    <>
      <div className={classes.firstContainer}>
        <p className={classes.searchText}>{search}</p>
      </div>
      <div className={classes.firstContainer}>
        <p className={classes.currentTemp}>{city.main.temp}&deg;Cel</p>
      </div>

      <div className={classes.firstContainer}>
        <p className={classes.minTemp}>
          Min : {city.main.temp_min}&deg;Cel | Max : {city.main.temp_max}
          &deg;Cel
        </p>
      </div>

      <div className={classes.latContainer}>
        <img width="64px" height="64px" src={equator} alt="equator" />
        <p className={classes.minTemp}>
          Latitude : {city.coord.lat} | Longitude : {city.coord.lon}
        </p>
      </div>

      <div>
        <div className={classes.points}>
          <p className={classes.minTemp}>Feels Like : {city.main.feels_like}</p>
          <p className={classes.minTemp}>
            | Ground Level : {city.main.grnd_level}
          </p>
        </div>

        <div className={classes.points}>
          <p className={classes.minTemp}>Humidity : {city.main.humidity}</p>
          <p className={classes.minTemp}>| pressure: {city.main.pressure}</p>
        </div>
        <p className={classes.minTemp}>Sea Level: {city.main.sea_level}</p>
      </div>
    </>
  );
};

export default WeatherData;
