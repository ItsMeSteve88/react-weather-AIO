import React from 'react'

const Forecast = ({title, items}) => {
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm">04:30 PM</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="weather icon"
              className="w-12 my-1"
            />
            <p className="font">32°</p>
          </div>
        </div>
      </div>
    );
}

export default Forecast