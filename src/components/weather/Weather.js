import React, { useEffect, useState } from "react";
import classes from "../styleContainer/weather/weather.module.css";
import cloudy from "../../assets/cloudy.png";
import WeatherData from "./WeatherData";
const Weather = () => {
  const [timeoutId, setTimeOutId] = useState();
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mohali");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9bd6e609c835d1068f5a546543ea5ad7
      `;
      if (search.length > 3) {
        const response = await fetch(url);
        const resJson = await response.json();
        setCity({ main: resJson.main, coord: resJson.coord });
      }
    };
    fetchApi();
  }, [search]);

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
    setTimeOutId(timeout);
  };

  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <input className={classes.input} onChange={onTextChange} />
          <div className={classes.imageContainer}>
            <img src={cloudy} alt={cloudy} />
          </div>

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <>
              <WeatherData city={city} search={search} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
