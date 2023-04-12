import { useEffect, useState } from "react";
// import axios from "axios";

import Navbar from "./components/Navbar";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
import CurrentLocation from "./components/CurrentLocation";
import GlobalMap from "./components/GlobalMap";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App()
{
  
  const [query, setQuery] = useState({ q: 'london' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  
  useEffect(() =>
  { 
    const fetchWeather = async () =>
  {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  }

  fetchWeather()
  }, [query, units]);

  return (
    <div>
      <Navbar />
      {weather && (
        <div>
          <div className="w-[1300px] p-7 rounded-lg shadow-md border-2">
            <TodayDisplay />
            <div className="w-[1250px] flex justify-between">
              <Card weather={weather}/>
              <Card />
              <Card />
              <Card />
              <Card />

              <div className="border-2 rounded-3xl w-80 mt-4 h-48">
                <CurrentLocation weather={weather} />
              </div>
            </div>
            <h1 className="text-end mt-6 font-semibold text-xl">
              Location Map
            </h1>
            <div className="flex gap-4">
              <div className="w-2/5">
                <Forecast title="hourly forecast" />
                <Forecast title="hourly forecast" />
              </div>
              <div className=" w-3/5">
                <GlobalMap />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
