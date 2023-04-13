import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

const Forecast = ({ title, items }) =>
{
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between">
          {items?.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <p className="text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                alt="weather icon"
                className="w-12 my-1"
              />
              <p className="font">{item.temp.toFixed()}&deg;</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Forecast