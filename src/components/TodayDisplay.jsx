import { formatToLocalTime } from "../services/weatherService";

const todayDisplay = ({ weather: { dt, timezone, name, country, temp } }) =>
{
    return (
      <div className="btn-group font-semibold text-xl">
        <h2 className="card-title">{formatToLocalTime(dt, timezone)}</h2>
        <h2 className="card-title ml-2">{name}</h2>
        <h2 className="card-title ml-2">{country}</h2>
        {/* <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Today
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Hourly
        </button>
        <button className="mr-8 text-gray-500 active:text-white hover:text-base-content">
          Next 7 Days
        </button> */}
      </div>
    );
  }
  
  export default todayDisplay