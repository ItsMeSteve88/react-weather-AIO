import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
import CurrentLocation from "./components/CurrentLocation";
import GlobalMap from "./components/GlobalMap";
import Cities from "./components/Cities";

function App() {
  const [data, setData] = useState(null);
  const [lati, setLati] = useState("");
  const [longi, setLongi] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const getLocation = () =>
  {
    if (!navigator.geolocation)
    {
      setError("Geolocation is not supported by your browser");
    } else
    {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      },
        () => {
          setError("Unable to retrieve your location");
        }
      );
    }
  };

  console.log(location)

  useEffect(() =>
  {
    getLocation();
  }, []);

  let lat 
  let lon 
  let key = "f13af67768ac1086ae8f072594bcd44e";
  let lang = "en";
  let units = "metric";
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${key}`;

  const fetchWeather = () =>
  {
    fetch(url).then((response) =>
    {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };


  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-10">
          <input
            className="input input-primary input-bordered w-96 mb-6 focus:outline-none capitalize"
            type="text"
            placeholder="Input Latitiude"
            value={lati}
            onChange={(e) => setLati(e.target.value)}
            onKeyPress={fetchWeather}
          />
          <input
            className="input input-primary input-bordered w-96 mb-6 focus:outline-none"
            type="text"
            placeholder="Input Longitude"
            value={longi}
            onChange={(e) => setLongi(e.target.value)}
            onKeyPress={fetchWeather}
          />
        </div>
        <div className="flex gap-6 mb-6">
          <button class="btn gap-2" onClick={fetchWeather}>
            <ion-icon name="search-outline" size="large"></ion-icon>
            Get Weather
          </button>
          <button class="btn gap-2" onClick={fetchWeather}>
            <ion-icon name="location-outline" size="large"></ion-icon>
            Use Current Location
          </button>
        </div>
      </div>
      <div className="w-[1300px] p-7 rounded-lg shadow-md border-2">
        <TodayDisplay />
        <div className="w-[1250px] flex justify-between">
          <Card data={data} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="border-2 rounded-3xl w-80 mt-4 h-48">
            <CurrentLocation data={data} />
          </div>
        </div>
        <h1 className="mt-6 font-semibold text-xl">World Map</h1>
        <div className="flex justify-between">
          <GlobalMap />
          <div className="flex flex-col">
            <Cities data={data} />
            <Cities data={data} />
            <Cities data={data} />
          </div>
        </div>
      </div>
      {error}
    </div>
  );
}

export default App;
