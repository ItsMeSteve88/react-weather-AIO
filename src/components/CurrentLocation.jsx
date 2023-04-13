import { formatToLocalTime } from "../services/weatherService";

const CurrentLocation = ({weather: {dt, timezone, name, country, temp}}) => {
    return (
      <div>
        <div className="image-full w-80">
          <div className="card-body p-4 mx-2">
            <h2 className="card-title">{formatToLocalTime(dt, timezone )}</h2>
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">{country}</h2>
            <p>
              Current Temp: {temp.toFixed(0)}&deg;C
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default CurrentLocation