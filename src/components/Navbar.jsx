import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react'


const Navbar = ({ setQuery, units, setUnits }) =>
{
  const [city, setCity] = useState('')
  
  const handleSearchClick = () =>
  {
    if (city !== '')
    {
      setQuery({q: city})
      setCity('')
    }
  }

  const handleLocationClick = () =>
  {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }
  
  const handleUnitsChange = (e) =>
  {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit)
      setUnits(selectedUnit)
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-10">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="input input-primary input-bordered w-96 mb-6 focus:outline-none capitalize"
          type="text"
          placeholder="search..."
        />
        <div className="flex gap-6 mb-6">
          <button className="btn gap-2"
          onClick={handleSearchClick}>
            <UilSearch size={25} />
            Get Weather
          </button>
          <button className="btn gap-2"
          onClick={handleLocationClick}>
            <UilLocationPoint size={25} />
            Use Current Location
          </button>
          <button className="btn btn-circle btn-outline text-xl" name='metric'
          onClick={handleUnitsChange}>
            &deg;C
          </button>
          <button className="btn btn-circle btn-outline text-xl" name='imperial'
          onClick={handleUnitsChange}>
            &deg;F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar