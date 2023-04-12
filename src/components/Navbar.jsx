import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'


const Navbar = ({location, searchLocation, setLocation}) => {

  return (
    <div className="form-control">
      <input
        className="input input-primary input-bordered w-96 absolute top-0 m-6"
        type="text"
        placeholder="Search Latitude"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={searchLocation}
      />
    </div>
  );
}

export default Navbar