import { useEffect, useState } from "react";
// import axios from "axios";

import Navbar from "./components/Navbar";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
//import CurrentLocation from "./components/CurrentLocation";
import GlobalMap from "./components/GlobalMap";
import Forecast from "./components/Forecast";
import Alerts from "./components/Alerts";
import getFormattedWeatherData from "./services/weatherService";
//import Daily from "./components/Daily";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App()
{
  
  const [query, setQuery] = useState({ q: "Hereford, US" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  
  useEffect(() =>
  { 
    const fetchWeather = async () =>
    {
      const message = query.q ? query.q : 'current location'

      toast.info(`Fetching weather for your ${message}`);
      await getFormattedWeatherData({ ...query, units }).then((data) =>
      {
      toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
      setWeather(data);
    });
  }

  fetchWeather();
  }, [query, units]);

  return (
    <div>
      <Navbar setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <div className="w-[1300px] p-7 rounded-lg shadow-md border-2">
            <TodayDisplay weather={weather} />
            <div className="w-[1240px] flex justify-between">
              {weather?.daily.map((daily, index) => (                
                <Card key={index} items={weather.daily} daily={daily} weather={weather} />
              ))}
              {/* <div className="border-2 rounded-3xl w-80 mt-4 h-48">
                <CurrentLocation weather={weather} />
              </div> */}
            </div>
            <h1 className="text-end mt-6 font-semibold text-xl">
              Location Map
            </h1>
            <div className="flex gap-4">
              <div className="w-2/5">
                <Forecast title="hourly forecast" items={weather.hourly} />
                <Alerts title="daily alerts" items={weather.alerts}/>
              </div>
              <div className=" w-3/5">
                <GlobalMap/>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
