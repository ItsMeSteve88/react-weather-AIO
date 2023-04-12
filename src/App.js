// import { useEffect, useState } from "react";
// import axios from "axios";

import Navbar from "./components/Navbar";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Card";
import CurrentLocation from "./components/CurrentLocation";
import GlobalMap from "./components/GlobalMap";
import Forecast from "./components/Forecast";

function App() {
  

  return (
    <div>
      <Navbar />
      <div className="w-[1300px] p-7 rounded-lg shadow-md border-2">
        <TodayDisplay />
        <div className="w-[1250px] flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          <div className="border-2 rounded-3xl w-80 mt-4 h-48">
            <CurrentLocation />
          </div>
        </div>
        <h1 className="text-end mt-6 font-semibold text-xl">Location Map</h1>
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
  );
}

export default App;
