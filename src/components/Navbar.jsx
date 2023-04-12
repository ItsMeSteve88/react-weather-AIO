import React from 'react'
import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'


const Navbar = ({location, searchLocation, setLocation}) => {

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex gap-10">
        <input
          className="input input-primary input-bordered w-96 mb-6 focus:outline-none capitalize"
          type="text"
          placeholder="search..."
        />
        <div className="flex gap-6 mb-6">
          <button class="btn gap-2">
            <UilSearch size={25} />
            Get Weather
          </button>
          <button class="btn gap-2">
            <UilLocationPoint size={25} />
            Use Current Location
          </button>
          <button class="btn btn-circle btn-outline text-xl" name='metric'>
            &deg;C
          </button>
          <button class="btn btn-circle btn-outline text-xl" name='imperial'>
            &deg;F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar