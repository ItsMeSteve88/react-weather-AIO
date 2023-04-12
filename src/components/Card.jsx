import { useState } from "react";
import { motion } from "framer-motion";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilWindsock,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const Card = ({ weather: {
  sunrise, sunset, details, icon, temp, temp_min, temp_max, feels_like, humidity, pressure, speed, dt, timezone
}}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="w-42 rounded-2xl border-2 flex grid-cols-2 h-48 mt-5"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-18 ml-1 p-3 flex flex-col items-center justify-between">
        <motion.h3 layout className="text-md font-medium">
        {formatToLocalTime(sunrise, timezone, "cccc")}
        </motion.h3>
        <hr className="divider mt-2" />
        <motion.p layout>
          <img
            src={iconUrlFromCode(icon)}
            alt="weather icon"
            className="relative bottom-4"
          />
        </motion.p>
        <motion.h2 layout className="text-4xl relative bottom-6">
          {temp.toFixed()}&deg;C
        </motion.h2>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-3 items-start justify-between w-[300px]"
        >
          <div className="font-medium">
            <p>{details}</p>
          </div>
          <hr className="divider mt-1.5" />
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center">
                <UilTemperature className="text-2xl mr-2" />
                <p className="text-xs">
                  Real Feel:{" "}
                  <span className="text-md font-medium">{feels_like.toFixed()}&deg;</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilTear className="text-2xl mr-2" />
                <p className="text-xs">
                  Humidity: <span className="text-md font-medium">{humidity}%</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilWind className="text-2xl mr-2" />
                <p className="text-xs">
                  Wind: <span className="text-md font-medium">{speed.toFixed()}km/h</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilWindsock className="text-2xl mr-2" />
                <p className="text-xs">
                  Pressure: <span className="text-md font-medium">{pressure}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center">
                <UilSun className="text-2xl mr-2" />
                <p className="text-xs">
                  Sunrise: <span className="text-md font-medium">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilSunset className="text-2xl mr-2" />
                <p className="text-xs">
                  Sunset: <span className="text-md font-medium">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilArrowUp className="text-2xl mr-2" />
                <p className="text-xs">
                  High Temp:{" "}
                  <span className="text-md font-medium">{temp_max.toFixed()}&deg;</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <UilArrowDown className="text-2xl mr-2" />
                <p className="text-xs">
                  Low Temp: <span className="text-md font-medium">{temp_min.toFixed()}&deg;</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
