import { DateTime } from "luxon";

const API_Key = "f13af67768ac1086ae8f072594bcd44e"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

// https://api.openweathermap.org/data/3.0/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly&appid=f13af67768ac1086ae8f072594bcd44e&units=metric

// https://tile.openweathermap.org/map/temp_new/4/{x}/{y}.png?appid=f13af67768ac1086ae8f072594bcd44e

const getWeatherData = (infoType, searchParams) =>
{
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_Key })
    
    return fetch(url)
        .then(response => response.json())
};

const formatCurrentWeather = data => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,

    } = data

    const {main: details, icon, description} = weather[0]

    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      description,
    };
}

const formatForecastWeather = (data) =>
{
    let { timezone, daily, alerts } = data
    daily = daily.slice(1, 6).map(d =>
    {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    });
    alerts = alerts.map(d =>
    {
        return {
            event: d.event,
            start: formatToLocalTime(d.start, timezone),
            end: formatToLocalTime(d.end, timezone),
            description: d.description,
            
        }
    });
    return {timezone, daily, alerts  }
}

const getFormattedWeatherData = async (searchParams) =>
{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,hourly",
      units: searchParams.units,
    }).then(formatForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
}

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData
export {formatToLocalTime, iconUrlFromCode}


